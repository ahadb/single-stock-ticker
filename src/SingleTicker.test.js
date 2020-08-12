import React from 'react';
import { render, waitForElement } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SingleTicker from './SingleTicker';

test('loads items eventually', async () => {
  const { getByTestId } = render(<SingleTicker symbol={'TSLA'} />);
  const data = await waitForElement(() => getByTestId('data'));
  expect(data).toBeInTheDocument();
});

test('renders approriate ticker results', async () => {
  const { getByText } = render(<SingleTicker symbol={'TSLA'} />);

  const tickerSymbol = await waitForElement(() => getByText('TSLA: NASDAQ'));
  const tickerDelayed = await waitForElement(() =>
    getByText('Delayed Quote')
  );
  const tickerDescription = await waitForElement(() =>
    getByText('Tesla, Inc.')
  );
  // console.log(elem);

  expect(tickerSymbol).toBeInTheDocument();
  expect(tickerDelayed).toBeInTheDocument();
  expect(tickerDescription).toBeInTheDocument();
});
