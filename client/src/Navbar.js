import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';  // Make sure to import the CSS file

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-links">
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
            <Link to= "/contactform"> contact</Link>
        </li>
        <li>
            <Link to= "/student" >student </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

