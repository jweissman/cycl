import React from 'react';
import logo from './logo.svg';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>CYCL</h1>
      </header>
      <main>
        {/* <p></p> */}
        {/* a tiny command language */}
        <ul id="list">
          <li>awesome</li>
          <li>clean</li>
        </ul>
        <div id="item">item</div>
      </main>
    </div>
  );
}

export default App;
