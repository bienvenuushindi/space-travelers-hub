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
<<<<<<< HEAD
    <div className="App">
    </div>
=======
    <div className="App" />
>>>>>>> 89cbc7a4dce4b89d6a89ce1dfa8204990f3b781f
  );
>>>>>>> 35b4adbf89eb807c22decd67eec51e3b3cb3ed06
}

export default App;
