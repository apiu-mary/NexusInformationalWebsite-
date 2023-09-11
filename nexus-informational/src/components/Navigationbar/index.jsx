
 import React, { useState } from 'react';
 
 import './style.css';

function Navbar() {
  const [isNavOpen, setNavOpen] = useState(false);
  const toggleNav = () => {
    setNavOpen(!isNavOpen);
  };
  return (
    <nav>
      <div className={`navbar-wrapper ${isNavOpen ? 'nav-open' : ''}`}>
        <span className="brand-container">
          <a className="logo-link" href="#logo">
            <img src={ 'img/images/Logo.png'} alt="Logo"className="logo-img"/>
          </a>
        </span>
        <div
          data-testid="hamburger-menu"
          className={`hamburger-menu ${isNavOpen ? 'open' : ''}`}
          onClick={toggleNav}
        >
          {isNavOpen ? (
            <div className="close-icon">
              <span></span>
              <span></span>
            </div>
          ) : (
            <>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </>
          )}
        </div>
        <ul data-testid="nav-list" className={`nav-list ${isNavOpen ? 'open' : ''}`}>
          <div className="centered-links">
            <li><a href="#Home">Home</a></li>
            <li><a href="#About Us">About</a></li>
            <li><a href="#What We do">Product</a></li>
            <li><a href="#Contact Us">Contact</a>
            </li>
          </div>
        </ul>
      </div>
    </nav>
  );
          }


export default Navbar;

