import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import './Navbar.css';
import logoo from './logoo.png';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="navbar">
      <FaBars className="nav-icon" onClick={toggleMenu} />
      <h1 className="logo-text">KOHINOOR</h1>
      <img className="avatar" src={logoo} alt="avatar" />

      {menuOpen && (
        <div className="menu-dropdown">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/viewproducts">Products</a></li>
            <li><a href="/#about">About</a></li>
            <li><a href="/#contact">Contact</a></li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;
