import React, { memo, useMemo } from 'react';

import { useScroll } from '@/libs';

import { ItemType } from '.';

interface Props {
  Item: (args: any) => JSX.Element;
  options: Array<ItemType>;
  height: number;
  childHeight: number;
  restItem?: number;
}

function ScrollComponent({
  Item,
  options,
  height,
  childHeight,
  restItem = 20,
}: Props) {
  const itemCount = options.length;
  const { scrollTop, ref } = useScroll();
  const totalHeight = itemCount * childHeight;

  let startNode = Math.floor(scrollTop / childHeight) - restItem;
  startNode = Math.max(0, startNode);
  let visibleNodeCount = Math.ceil(height / childHeight) + 2 * restItem;
  visibleNodeCount = Math.min(itemCount - startNode, visibleNodeCount);

  const offsetY = startNode * childHeight;

  const visibleChildren = useMemo(() => {
    return new Array(visibleNodeCount)
      .fill(null)
      .map((_, index) => Item(options[index + startNode]));
  }, [startNode, visibleNodeCount, Item, options]);

  return (
    <div style={{ height, overflow: 'auto' }} ref={ref}>
      <div
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
