import React from 'react';
import { NavLink } from 'react-router-dom';
import planet from '../images/planet.png';

const Nav = () => (
  <header>
    <div className="mainHeader">
      <div className="logo">
        <img src={planet} alt="Planet Space Logo to Infinity and Beyond" />
        <h1>Space Travelers Hub</h1>
      </div>
      <nav>
        <ul>
          <NavLink to="/">
            <li>
              Rockets
            </li>
          </NavLink>
          <NavLink to="/missions">
            <li>
              Missions
            </li>
          </NavLink>
          <NavLink to="/profile">
            <li>
              My Profile
            </li>
          </NavLink>
        </ul>
      </nav>
    </div>
  </header>
);

export default Nav;
