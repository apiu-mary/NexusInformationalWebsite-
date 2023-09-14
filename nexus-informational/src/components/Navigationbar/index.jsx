
//  import React, { useState } from 'react';
 
//  import './style.css';

// function Navbar() {
//   const [isNavOpen, setNavOpen] = useState(false);
//   const toggleNav = () => {
//     setNavOpen(!isNavOpen);
//   };
//   return (
//     <nav>
//       <div className={`navbar-wrapper ${isNavOpen ? 'nav-open' : ''}`}>
//         <span className="brand-container">
//           <a className="logo-link" href="#logo">
//             <img src={ 'img/images/Logo.png'} alt="Logo"className="logo-img"/>
//           </a>
//         </span>
//         <div
//           data-testid="hamburger-menu"
//           className={`hamburger-menu ${isNavOpen ? 'open' : ''}`}
//           onClick={toggleNav}
//         >
//           {isNavOpen ? (
//             <div className="close-icon">
//               <span></span>
//               <span></span>
//             </div>
//           ) : (
//             <>
//               <div className="bar"></div>
//               <div className="bar"></div>
//               <div className="bar"></div>
//             </>
//           )}
//         </div>
//         <ul data-testid="nav-list" className={`nav-list ${isNavOpen ? 'open' : ''}`}>
//           <div className="centered-links">
//             <li><a href="Home">Home</a></li>
//             <li><a href="#About Us">About</a></li>
//             <li><a href="#What We do">Product</a></li>
//             <li><a href="#footer">Contact</a>
//             </li>
//           </div>
//         </ul>
//       </div>
//     </nav>
//   );
//           }


// export default Navbar;


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
        <img src="./img/images/Logo.png" alt="" />
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

