import React from 'react';
import { render, waitForElement } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TickerChange from './TickerChange';

test('renders tree based on id ', async () => {
  const { findByTestId } = render(<TickerChange />);

  const item = await findByTestId('price-change');
  expect(item).toBeInTheDocument();
});
