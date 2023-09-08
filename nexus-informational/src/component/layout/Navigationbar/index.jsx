
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import './style.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const closeMenu = () => {
    setMenuOpen(false);
  };
  return (
    <nav className={`navbar ${menuOpen ? 'open' : ''}`}>
      <div className="logo">
        <img src='/img/images/Logo.png' alt="Logo" />
      </div>
    
      <div className="menu-icon" onClick={toggleMenu}>
        <FontAwesomeIcon icon={faTimes} />
      </div>
      <ul className={`nav-links ${menuOpen ? 'active' : ''}`} onClick={closeMenu}>
        <li><a href="#home">Home</a></li>
        <li><a href="#aboutus">About Us</a></li>
        <li><a href="#we">What We Do</a></li>
        <li><a href="/contactus">Contact Us</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
