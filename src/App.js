import React from 'react';
import './App.css';
import SingleTicker from '../src/SingleTicker';

function App() {
  return (
    <div>
      <SingleTicker symbol={'TSLA'} />
    </div>
  );
}

export default App;
