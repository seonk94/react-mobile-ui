import React, { useEffect, useMemo, useRef, useState } from 'react';

import MasonryItem from './MasonryItem';

const ContainerStyle: React.CSSProperties = {
  display: 'grid',
  maxWidth: '100rem',
  margin: '0 auto',
  gap: '2rem',
  gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))',
  gridAutoRows: '0.5rem',
};

const INIT_CONTAINER_STYLE = {
  rowGap: 0,
  rowHeight: 0,
} as const;

interface Props {
  items: Array<{
    width: string;
    height: number;
  }>;
}
const Masonry: React.FC<Props> = ({ items }: Props) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [containerStyle, setContainerStyle] = useState<{
    rowGap: number;
    rowHeight: number;
  }>(INIT_CONTAINER_STYLE);

  const resize = () => {
    if (!containerRef.current) {
      setContainerStyle(INIT_CONTAINER_STYLE);
      return;
    }
    const rowHeight = parseInt(
      window
        .getComputedStyle(containerRef.current)
        .getPropertyValue('grid-auto-rows')
    );
    const rowGap = parseInt(
      window.getComputedStyle(containerRef.current).getPropertyValue('row-gap')
    );

    setContainerStyle({
      rowGap,
      rowHeight,
    });
  };

  useEffect(() => {
    resize();
  }, [containerRef]);

  return (
    <div style={ContainerStyle} ref={containerRef}>
      {items.map((item, index) => (
        <MasonryItem key={index} containerStyle={containerStyle} item={item} />
      ))}
    </div>
  );
};

export default Masonry;
