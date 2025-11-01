import React from 'react';
import './footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Subhalaxmi Choudhury</h3>
            <p>MCA Student passionate about technology and innovation</p>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Connect</h4>
            <div className="social-links">
              <a href="mailto:subhalaxmichoudhury174@gmail.com">Email</a>
              <a href="https://www.linkedin.com/in/subhalaxmi-choudhury-a1b7a7381" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://wa.me/918594937084" target="_blank" rel="noopener noreferrer">WhatsApp</a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Subhalaxmi Choudhury. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;