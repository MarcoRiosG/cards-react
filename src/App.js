import React from 'react';
import './App.scss'
// import './App.css';

import Deck from './components/deck/index'



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Deck title="Table" path="table" flipped="2"/>
        <Deck title="Hand" path="deck/2" flipped="2"/>
      </header>
    </div>
  );
}

export default App;
