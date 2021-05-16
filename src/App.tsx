import React from 'react';

import './App.css';
import { Counter } from './features/counter/Counter';
import { CounterContainer } from "containers";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Counter /> */}
        <CounterContainer />
      </header>
    </div>
  );
}

export default App;
