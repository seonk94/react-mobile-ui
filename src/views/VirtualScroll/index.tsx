import React, { memo } from 'react';

import ScrollComponent from './ScrollComponent';

export interface ItemType {
  id: number;
  text: string;
}

const dummy: ItemType[] = [];

const createDummy = () => {
  for (let i = 0; i < 10000; i++) {
    dummy.push({ id: i, text: `${i}번째 아이템` });
  }
};

createDummy();

interface ItemProps {
  item: ItemType;
}
// eslint-disable-next-line react/display-name
const ListItem: any = ({ item }: ItemProps) => {
  return <li key={item.id}>{item.text}</li>;
};

function VirtualScroll() {
  return (
    <div>
      <h3>Virtual Scroll</h3>
      <ScrollComponent
        Item={ListItem}
        options={dummy}
        height={500}
        childHeight={21}
        itemCount={dummy.length}
        renderAhread={20}
      />
    </div>
  );
}

export default VirtualScroll;
