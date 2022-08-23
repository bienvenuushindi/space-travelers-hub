import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Mission from './Components/Mission/Mission';
import Nav from './Components/Nav';

function App() {
  <div className="App">
    <Nav />
    <Routes>
      <Route exact path="/" element={<Mission />} />
    </Routes>
  </div>;
}

export default App;
