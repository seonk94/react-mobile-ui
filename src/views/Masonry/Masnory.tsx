import React, { useEffect, useState } from 'react';

import MasnoryItem from './MasnoryItem';

export interface ItemType {
  x: number;
  y: number;
  height: number;
  width: number;
}

const COLUMN_WIDTH = 250;
const ROW_GAP = 8;
const COLUMN_GAP = 12;

interface Props {
  columnCount: number;
  items: Array<{
    width: string;
    height: number;
  }>;
  rowGap?: number;
  columnGap?: number;
  columnWidth?: number;
}

const Masonry: React.FC<Props> = ({
  items,
  columnCount,
  rowGap = ROW_GAP,
  columnGap = COLUMN_GAP,
  columnWidth = COLUMN_WIDTH,
}) => {
  const [columns, setColumns] = useState<ItemType[][]>(
    new Array(columnCount).fill([])
  );
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const newColumns: ItemType[][] = new Array(columnCount);

    items.forEach((item) => {
      let columnIndex = -1;
      let minTarget = Number.MAX_SAFE_INTEGER;

      const emptyColumnIndex = newColumns.findIndex(
        (column) => !column || column.length === 0
      );

      if (emptyColumnIndex > -1) {
        if (!newColumns[emptyColumnIndex]) {
          newColumns[emptyColumnIndex] = [];
        }
        newColumns[emptyColumnIndex].push({
          x: emptyColumnIndex * (columnWidth + columnGap),
          y: 0,
          height: item.height,
          width: columnWidth,
        });
        return;
      }

      newColumns.forEach((column, index) => {
        const { height, y } = column[column.length - 1];
        const nextTarget = height + y;

        if (minTarget > nextTarget) {
          minTarget = nextTarget;
          columnIndex = index;
        }
      });

      newColumns[columnIndex].push({
        x: columnIndex * (columnWidth + columnGap),
        y: minTarget + rowGap,
        height: item.height,
        width: columnWidth,
      });
    });

    let maxHeight = 0;
    newColumns.forEach((column) => {
      const height =
        column[column.length - 1].height + column[column.length - 1].y;

      if (maxHeight < height) {
        maxHeight = height;
      }
    });

    setHeight(maxHeight);
    setColumns(newColumns);
  }, [items]);

  return (
    <div
      style={{
        position: 'relative',
        margin: 'auto',
        width: `${columnWidth * columnCount + columnGap * (columnCount - 1)}px`,
        height: `${height}px`,
      }}
    >
      {columns.flat().map((item, index) => (
        <MasnoryItem key={index} item={item} />
      ))}
    </div>
  );
};

export default Masonry;
