import React from 'react';
import './style.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFacebook} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
      <div className="logo">
        <img src='/img/images/Logoicon.png' alt="Logo" className='logf'/>
      </div>
      <div className="social-icons">
        <div className="linkedin-icon">
            <FontAwesomeIcon icon={faLinkedin} className="fa-2x linkedin-icon-text" />
          </div>
          <div className="facebook-icon">
              <FontAwesomeIcon icon={faFacebook} className="fa-2x facebook-icon-text" />
            </div>
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






