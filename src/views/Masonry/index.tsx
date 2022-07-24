import React from 'react';

import Masonry from './Masnory';

interface ItemType {
  width: string;
  height: number;
}

const createBox = () => {
  return {
    width: '100%',
    height: 50 + Math.floor(Math.random() * 201),
  };
};

const items: ItemType[] = [];

(function init() {
  for (let i = 0; i < 100; i++) {
    items.push(createBox());
  }
})();

function MasnoryPage() {
  return (
    <div>
      <h3>Masnory</h3>
      <Masonry columnCount={4} items={items} />
    </div>
  );
}

export default MasnoryPage;
