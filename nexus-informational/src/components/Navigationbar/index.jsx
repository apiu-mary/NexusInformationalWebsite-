import React, { useState } from "react";
import "./style.css";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNav = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="Navbar">
      <span className="logo">
        <img src="/images/Logo.png" alt="" />
      </span>
      <div className={`nav-items ${isOpen && "open"}`} data-testid="nav-items">
        <a href="/our services">Home</a>
        <a href="/our team">About Us</a>
        <a href="/our team">What We Do</a>
        <a href="/our team">Our Team</a>
        <a href="/contact us">Contact Us</a>
       
      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={toggleNav}
        data-testid="nav-toggle"
      >
        <div className="bar"></div>
        {isOpen && <div className="overlay" onClick={toggleNav}></div>}
      </div>
    </div>
  );
};
export default Navbar;

