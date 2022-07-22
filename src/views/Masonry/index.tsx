import React, { useEffect, useRef, useState } from 'react';

import MasonryItem from './MasonryItem';

const ContainerStyle: React.CSSProperties = {
  display: 'grid',
  maxWidth: '100rem',
  margin: '0 auto',
  gap: '2rem',
  gridTemplateColumns: 'repeat(auto-fit,minmax(20rem,1fr))',
  gridAutoRows: '0.5rem',
};

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
  for (let i = 0; i < 50; i++) {
    items.push(createBox());
  }
})();

function Masonry() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  return (
    <div>
      <h3>Masonry</h3>

      <div style={ContainerStyle} ref={containerRef}>
        {items.map((item, index) => (
          <MasonryItem key={index} containerRef={containerRef} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Masonry;
