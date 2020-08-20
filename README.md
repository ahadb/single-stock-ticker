# Single Stock Ticker

Single stock ticker is a React component that displays US based stocks in a standard single ticker like format.
Currently very lightweight API but dynamic and powerful, this will evolve.

## Usage

For now, till it gets packaged as a React component:

* Clone repo
* `npm install`
* `npm run start`
* `npm run test`

```javascript
// just pass one prop for now...
<SingleStockTicker symbol={'TSLA'} />
```

## Dependencies

I've kept deps at a minimal except for what comes out of the box for Create React App and these below:

1. CSS in JS
2. React Query
3. Axios
4. ~~MSW for web worker REST API testing (dev dep)~~

## Data

Single Stock Ticker get's it's market data from [IEX CLOUD](https://iexcloud.io/) API's. They're great, but you
can use whatever you want and adjust your requests. There are also numerous financial API's out there with a 
similar structure so do your research.

It's certainly worth noting that the component does not update in real time, ...yet - to consume real-time services
from any of the top financial market data providers **costs money**. That said it would be fairly simple to adjust
the component to consume real-time updates and you can determine what suits you best:

* Web Sockets
* SSE
* Interval over REST :(

React Query helps a bit and is baked in already, so check that out.

## Future Releases

I did not package up the component as it will evolve (props, styling, real-time and other options) so intentionally
did not want to seal it's fate, ...yet.

How so, if you're curious. Numerous things will be done before it's packaged up and exposes a more robust React API.



