import React from 'react';
import { Link } from 'react-router-dom';
import '..//styles/NavBar.css';
import logo from '..//assets/MyGolfHub_transparent2.png';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/">
          <img src={logo} className="app-logo" alt="MyGolfHub Logo" />
        </Link>
      </div>

      <ul className="navbar-right">
        <li>
          {/* Link to go to home page */}
          <Link to="/">Home</Link>
        </li>
        <li>
          {/* Link to go to scorecards saved & Add new ones */}
          <Link to="/scorecards">Scorecards</Link>
        </li>
        <li>
          {/* Link to go to goals and add new ones */}
          <Link to="/goals">Goals</Link>
        </li>
        <li>
          {/* Link to go to bag */}
          <Link to="/bag">Bag</Link>
        </li>
        <li>
          {/* Link to go to about website and me */}
          <Link to="/about">About</Link>
        </li>
        <li>
          {/* Link to login or log out */}
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
