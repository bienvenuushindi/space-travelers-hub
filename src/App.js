import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './Components/Nav';
import Rockets from './Components/Rockets/Rocket';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route exact path="/" element={<Rockets />} />
      </Routes>
    </div>
  );
}

export default App;
