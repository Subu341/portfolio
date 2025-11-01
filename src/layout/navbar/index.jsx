import React, { useState, useEffect } from 'react';
import './navbar.css';

const Navbar = ({ currentPage, setCurrentPage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-brand">
          <button onClick={() => setCurrentPage('home')} className="brand-link">Subhalaxmi</button>
        </div>
        
        <nav className={`navbar-nav ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          <button 
            className={`nav-link ${currentPage === 'home' ? 'active' : ''}`} 
            onClick={() => { setCurrentPage('home'); setIsMobileMenuOpen(false); }}
          >
            Home
          </button>
          <button 
            className={`nav-link ${currentPage === 'about' ? 'active' : ''}`} 
            onClick={() => { setCurrentPage('about'); setIsMobileMenuOpen(false); }}
          >
            About Me
          </button>
          <button 
            className={`nav-link ${currentPage === 'skills' ? 'active' : ''}`} 
            onClick={() => { setCurrentPage('skills'); setIsMobileMenuOpen(false); }}
          >
            Skills
          </button>
          <button 
            className={`nav-link ${currentPage === 'projects' ? 'active' : ''}`} 
            onClick={() => { setCurrentPage('projects'); setIsMobileMenuOpen(false); }}
          >
            Projects
          </button>
          <button 
            className={`nav-link ${currentPage === 'certifications' ? 'active' : ''}`} 
            onClick={() => { setCurrentPage('certifications'); setIsMobileMenuOpen(false); }}
          >
            Certifications
          </button>
          <button 
            className={`nav-link ${currentPage === 'contact' ? 'active' : ''}`} 
            onClick={() => { setCurrentPage('contact'); setIsMobileMenuOpen(false); }}
          >
            Contact
          </button>
        </nav>

        <button 
          className="mobile-menu-toggle"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Navbar;