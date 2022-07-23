import React, { useEffect, useState } from 'react';

interface Props {
  item: {
    width: string;
    height: number;
  };

  containerStyle: {
    rowGap: number;
    rowHeight: number;
  };
}

const MasonryItem: React.FC<Props> = ({ item, containerStyle }: Props) => {
  const [style, setStyle] = useState({});

  const resize = () => {
    const rowSpan = Math.floor(
      (item.height + containerStyle.rowGap) /
        (containerStyle.rowHeight + containerStyle.rowGap)
    );

    setStyle({
      gridRowEnd: `span ${rowSpan}`,
    });
  };

  useEffect(() => {
    resize();
  }, [containerStyle]);

  return (
    <div
      style={{
        ...style,
        width: item.width,
        background: '#ddd',
      }}
    >
      <div>item</div>
    </div>
  );
};

export default MasonryItem;
