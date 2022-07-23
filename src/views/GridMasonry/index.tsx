import React from 'react';

import Masonry from './Masonry';

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

function MasonryPage() {
  return (
    <div>
      <h3>Masonry</h3>
      <Masonry items={items} />
    </div>
  );
}

export default MasonryPage;
