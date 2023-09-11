
import React from 'react';
import './style.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <img id='logo' src="img/images/nexuswhite.png" alt="" /> <br /> <br />
        <FontAwesomeIcon icon={faFacebook} className="fa-2x facebook-icon-text" />
        <FontAwesomeIcon icon={faLinkedin} className="fa-2x linkedin-icon-text" />
      </div>
      <div className="footer-contact">
        <h3>Contact Us</h3>
        <p>+254742325744</p>
        <p>niunexuss@gmail.com</p>
        <p>Nairobi, Kenya</p>
      </div>
      <div className="footer-support">
        <h3>Support</h3>
        <p>FAQs</p>
        <p>Terms</p>
        <p>Privacy</p>
      </div>
      <div className="footer-newsletter">
        <h3>Newsletter Subscription</h3>
        <p>Subscribe to our newsletter</p>
        <input type="text" placeholder="Enter your email" />
        <button>Subscribe</button>
      </div>
      <div className="footer-copyright">
        <p>&copy; 2023. All rights reserved by Nexus</p>
      </div>
      
    </footer>
  );
};

export default Footer;

