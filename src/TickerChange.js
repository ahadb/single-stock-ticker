import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  tickerPriceChangeNegative: {
    display: 'flex',
    marginTop: 12,
    fontSize: 28,
    color: 'red',
  },
  tickerPriceChangePositive: {
    display: 'flex',
    marginTop: 12,
    fontSize: 28,
    color: 'green',
  },
});

function TickerChange({ price, previousClose }) {
  const classes = useStyles();
  const result = price - previousClose;
  const determineChange = Math.sign(result === -1);

  return (
    <span
      data-testid="price-change"
      className={
        determineChange
          ? classes.tickerPriceChangeNegative
          : classes.tickerPriceChangePositive
      }
    >
      {result.toFixed(2)}
    </span>
  );
}

export default TickerChange;
