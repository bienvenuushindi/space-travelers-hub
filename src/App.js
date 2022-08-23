import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Rocket from './Components/Rockets/Rocket';
import Mission from './Components/Mission/Mission';
import Profile from './Components/Profile/Profile';
import Nav from './Components/Nav';

function App() {
  <div className="App">
    <Nav />
    <Routes>
      <Route exact path="/" element={<Rocket />} />
      <Route path="/missions" element={<Mission />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  </div>;
}

export default App;
