import React, { memo, useMemo } from 'react';

import { ItemType } from '.';
import { useScrollAware } from './useScroll';

interface Props {
  Item: any;
  itemCount: number;
  options: Array<ItemType>;
  height: number;
  childHeight: number;
  renderAhread: number;
}

function ScrollComponent({
  Item,
  itemCount,
  options,
  height,
  childHeight,
  renderAhread = 20,
}: Props) {
  const { scrollTop, ref } = useScrollAware();
  const totalHeight = itemCount * childHeight;

  let startNode = Math.floor(scrollTop / childHeight) - renderAhread;
  startNode = Math.max(0, startNode);

  let visibleNodeCount = Math.ceil(height / childHeight) + 2 * renderAhread;
  visibleNodeCount = Math.min(itemCount - startNode, visibleNodeCount);

  const offsetY = startNode * childHeight;

  const visibleChildren = useMemo(() => {
    return new Array(visibleNodeCount)
      .fill(null)
      .map((_, index) => (
        <Item item={options[index + startNode]} key={index + startNode} />
      ));
  }, [startNode, visibleNodeCount, Item, options]);

  return (
    <div style={{ height, overflow: 'auto' }} ref={ref}>
      <div
        className="viewport"
        style={{
          overflow: 'hidden',
          willChange: 'transform',
          height: totalHeight,
          position: 'relative',
        }}
      >
        <div
          style={{
            willChange: 'transform',
            transform: `translateY(${offsetY}px)`,
          }}
        >
          {visibleChildren}
        </div>
      </div>
    </div>
  );
}

export default memo(ScrollComponent);
