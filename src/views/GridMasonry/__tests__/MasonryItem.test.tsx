import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import React from 'react';

import MasonryItem from '../MasonryItem';

const CONTAINER_STYLE = {
  rowGap: 0,
  rowHeight: 0,
};

describe('MasonryItem', () => {
  it('should render correctly', () => {
    const wrapper = render(
      <MasonryItem
        containerStyle={CONTAINER_STYLE}
        item={{ width: '100%', height: 200 }}
      />
    );

    expect(() => wrapper.unmount()).not.toThrow();
  });
});
