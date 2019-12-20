import React, { useState } from 'react';
import './App.css';

const App: React.FC = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <h1>CYCL</h1>
      </header>
      <main>
        <ul id="list">
          <li>awesome</li>
          <li>clean</li>
        </ul>
        <div id="item">item</div>
        <div id="counter">{count} clicks</div>
        <button onClick={()=>setCount(count+1)}>
          increment
        </button>
      </main>
    </div>
  );
}

export default App;
