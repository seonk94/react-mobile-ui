import React, { useEffect, useState } from 'react';

const ItemStyle: React.CSSProperties = {
  borderRadius: '2rem',
  overflow: 'hidden',
  visibility: 'visible',
};

interface Props {
  item: {
    width: string;
    height: number;
  };

  containerRef: React.MutableRefObject<HTMLDivElement | null>;
}

const MasonryItem: React.FC<Props> = ({ item, containerRef }: Props) => {
  const [style, setStyle] = useState({});

  const resize = () => {
    if (!containerRef.current) return;
    const rowHeight = parseInt(
      window
        .getComputedStyle(containerRef.current)
        .getPropertyValue('grid-auto-rows')
    );
    const rowGap = parseInt(
      window
        .getComputedStyle(containerRef.current)
        .getPropertyValue('grid-row-gap')
    );
    const rowSpan = Math.floor((item.height + rowGap) / (rowHeight + rowGap));

    setStyle({
      gridRowEnd: `span ${rowSpan}`,
    });
  };

  useEffect(() => {
    resize();
  }, []);

  return (
    <div
      style={{
        ...style,
        width: item.width,
        background: '#ddd',
      }}
    >
      <div></div>
    </div>
  );
};

export default MasonryItem;
