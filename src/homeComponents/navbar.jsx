import React from 'react';
import { Link } from 'react-router-dom';
import About from './about';
import './style.css';

const Navbar = () => {
  return (
    <nav className="nav">
      {/* <Link className="navbar-brand" to="/">
        Algorithm Visualizer
      </Link>

      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <Link className="nav-link" to="/about">
            About
          </Link>
        </li>
      </ul> */}
      <h1>Algorithm Visualizer</h1>
    </nav>
  );
};

export default Navbar;
