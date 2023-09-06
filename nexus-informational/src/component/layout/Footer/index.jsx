import React from 'react';
import './style.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
      <div className="logo">
        <img src='/img/images/Logo.png' alt="Logo" className='log'/>
      </div>
        <div className="social-icons">
        </div>
      </div>
      <div className="footer-contact">
        <h4>Contact Us</h4>
        <p>+254742325744</p>
        <p>niunexuss@gmail.com</p>
        <p>Nairobi, Kenya</p>
      </div>
      <div className="footer-support">
        <h4>Support</h4>
          <li>FAQs</li>
          <li>Terms</li>
          <li>Privacy</li>
      </div>
      <div className="footer-newsletter">
        <h4>Newsletter Subscription</h4>
        <input type="text" placeholder="Subscribe to our newsletter" />
        <button>Subscribe</button>
      </div>
      <hr className="footer-line" />
      <p className="footer-copyright">Copyright 2023. All rights reserved by Nexus Group</p>
    </footer>
  );
}
export default Footer;






