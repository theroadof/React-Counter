import React from 'react';
import './App.css';
import Counter from './Components/Counter'
import CounterGroup from './Components/CounterGroup';

function App() {
  return (
    <div className="App-header">
      <CounterGroup number={5} />
    </div>
  );
}

export default App;
