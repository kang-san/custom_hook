import React from 'react';
import './App.css';
import Tag from './components/Tag_V2';
import Random from './components/Random_V2';

function App() {
  return (
    <div>
      <h1> custom hook ~~~~ </h1>
      <div className="main-container">
        <Random />
        <Tag />
      </div>
    </div>
  );
}

export default App;
