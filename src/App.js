import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Mission from './Components/Mission/Mission';
import Nav from './Components/Nav';
import Rockets from './Components/Rockets/Rocket';
import Profile from './Components/Profile/Profile';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route exact path="/" element={<Rockets />} />
        <Route path="/missions" element={<Mission />} />
        <Route exact path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
