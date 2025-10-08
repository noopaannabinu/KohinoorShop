import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';   // Added close icon
import './Navbar.css';
import kohilogo from '../../assets/images/kohilogo.png';
import { Link } from 'react-router-dom';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="navbar">
      {/* Logo Text */}
      <h1 className="logo-text">KOHINOOR GLASS & PLYWOOD</h1>

      {/* Desktop Links */}
      <ul className="nav-links">
        <li><Link to="/" onClick={closeMenu}>Home</Link></li>
        <li><Link to="/viewproducts" onClick={closeMenu}>Products</Link></li>
        <li><Link to="/aboutus" onClick={closeMenu}>About</Link></li>
        <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
      </ul>

      {/* Avatar (hidden on mobile) */}
      <img className="avatar" src={kohilogo} alt="avatar" />

      {/* Hamburger Icon (only on mobile) */}
      <div className="nav-icon" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="menu-dropdown">
          <ul>
            <li><Link to="/" onClick={closeMenu}>Home</Link></li>
            <li><Link to="/viewproducts" onClick={closeMenu}>Products</Link></li>
            <li><Link to="/aboutus" onClick={closeMenu}>About</Link></li>
            <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;
