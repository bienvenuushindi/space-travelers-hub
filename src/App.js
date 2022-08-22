import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Rocket from './Components/Rockets/Rocket';
import Mission from './Components/Mission/Mission';
import Profile from './Components/Profile/Profile';
import Nav from './Components/Nav';

function App() {
<<<<<<< HEAD
  <div className="App">
    <Nav />
    <Routes>
      <Route exact path="/" element={<Rocket />} />
      <Route path="/missions" element={<Mission />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  </div>
=======
  return (
    <div className="App">
    </div>
  );
>>>>>>> 35b4adbf89eb807c22decd67eec51e3b3cb3ed06
}

export default App;
