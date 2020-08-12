import React, { Fragment, useEffect } from 'react';
import { createUseStyles } from 'react-jss';
import axios from 'axios';
import { useQuery } from 'react-query';
import { priceChange, commaSeparatedNumbers } from './utils/utils';
import { ReactQueryDevtools } from 'react-query-devtools';
import TickerChange from './TickerChange';

const useStyles = createUseStyles({
  tickerContainerBox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '50vh',
    background: '#333',
  },
  tickerBox: {
    height: 85,
    width: 350,
    border: '1px solid #ccc',
    padding: 10,
    background: 'white',
  },
  tickerSymbol: {
    display: 'flex',
  },
  tickerCompanyDesc: {
    display: 'flex',
    fontSize: 12,
    marginTop: 3,
    height: 15,
  },
  tickerBody: {
    display: 'flex',
    marginTop: 3,
  },
  tickerPrice: {
    fontSize: 40,
  },
  tickerPriceChange: {
    display: 'flex',
    marginTop: 12,
    fontSize: 28,
    color: 'red',
  },
  left: {
    flex: 1,
    fontWeight: 'bold',
  },
  right: {
    fontSize: 10,
  },
  tickerDetails: {
    marginTop: -5
  }
});

function useStocks(symbol) {
  return useQuery('useStocks', async () => {
    const $BASE_URL = 'https://cloud.iexapis.com/';
    const token = 'pk_807891336cae450e8aefb6a7c9f9a34e';

    const { data } = await axios.get(
      `${$BASE_URL}/stable/stock/${symbol}/quote?token=${token}`
    );
    return data;
  });
}

function SingleTicker(props) {
  const { status, data, error, isFetching } = useStocks(props.symbol)
  const classes = useStyles();

  return (
    <div className={classes.tickerContainerBox}>
      <div data-testid="data" className={classes.tickerBox}>
        {data && (
          <Fragment>
            <div className={classes.tickerSymbol}>
              <div className={classes.left}>
                {data.symbol}: {data.primaryExchange}
              </div>
              <div className={classes.tickerDetails}>
                <div className={classes.right}>Delayed Quote</div>
                <div className={classes.right}>{data.latestTime}</div>
              </div>
              </div>
            <div className={classes.tickerCompanyDesc}>
              <span>{data.companyName}</span>
            </div>
            <div className={classes.tickerBody}>
              <span className={classes.tickerPrice}>
                {commaSeparatedNumbers(data.latestPrice)}
              </span>
              &nbsp;&nbsp;&nbsp;
              <TickerChange
                price={data.latestPrice}
                previousClose={data.previousClose}
              />
            </div>
          </Fragment>
        )}
      </div>

      {/*<ReactQueryDevtools initialIsOpen />*/}
    </div>
  );
}

export default SingleTicker;
