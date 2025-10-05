import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import './Navbar.css';
import kohilogo from '../../assets/images/kohilogo.png';
import { Link } from 'react-router-dom';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Close menu when a link is clicked
  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <div className="navbar">
      <FaBars className="nav-icon" onClick={toggleMenu} />
      <h1 className="logo-text">KOHINOOR GLASS & PLYWOOD</h1>
      <img className="avatar" src={kohilogo} alt="avatar" />

      {menuOpen && (
        <div className="menu-dropdown">
          <ul>
            <li>
              <Link to="/" onClick={handleLinkClick}>Home</Link>
            </li>
            <li>
              <Link to="/viewproducts" onClick={handleLinkClick}>Products</Link>
            </li>
            <li>
              <Link to="/aboutus" onClick={handleLinkClick}>About</Link>
            </li>
            <li>
              <Link to="/contact" onClick={handleLinkClick}>Contact</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;
