import React from 'react';

import { ItemType } from './Masnory';

interface Props {
  item: ItemType;
}
const MasnoryItem: React.FC<Props> = ({ item }) => {
  const style: React.CSSProperties = {
    position: 'absolute',
    top: item.y,
    left: item.x,
    height: item.height,
    background: '#ddd',
    width: item.width,
  };
  return <div style={style}>item</div>;
};

export default MasnoryItem;
