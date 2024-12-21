import React from 'react';
import './Navbar.css';

const Navbar = () => (
  <nav className="navbar">
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/about">About</a></li>
      <li><a href="/login">Login</a></li>
    </ul>
  </nav>
);

export default Navbar;
