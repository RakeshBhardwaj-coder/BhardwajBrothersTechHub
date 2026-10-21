import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './navbar.css';

function Navbar({ onNavigate }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');
  const navRef = useRef(null);
  const navigate = useNavigate();

  // Outside click to close mobile menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNavClick = (link, sectionId) => {
    setActiveLink(link);
    setIsOpen(false);

    if (onNavigate) {
      onNavigate(link.toLowerCase());
    }

    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setIsOpen(false);
    navigate('/login');
  };

  return (
    <nav className="navbar" ref={navRef}>
      {/* Brand Section */}
      <div className="nav-brand" onClick={() => handleNavClick('Home', 'home')}>
        <img src="logo.png" alt="Logo" className="brand-logo" />
        <div className="brand-text">
          <span className="brand-title">Brand Title</span>
          <span className="brand-subtitle">Brand Subtitle Description</span>
        </div>
      </div>

      {/* Mobile Toggle Button */}
      <button 
        className="menu-icon" 
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Navigation"
      >
        {isOpen ? '✕' : '☰'}
      </button>

      {/* Nav Links */}
      <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
        <li>
          <a 
            href="#home" 
            className={activeLink === 'Home' ? 'active-link' : ''} 
            onClick={(e) => { e.preventDefault(); handleNavClick('Home', 'home'); }}
          >
            Home
          </a>
        </li>
        <li>
          <a 
            href="#gamezone" 
            className={activeLink === 'GameZone' ? 'active-link' : ''} 
            onClick={(e) => { e.preventDefault(); handleNavClick('GameZone', 'gamezone'); }}
          >
            Game Zone
          </a>
        </li>
        <li>
          <a 
            href="#courses" 
            className={activeLink === 'Courses' ? 'active-link' : ''} 
            onClick={(e) => { e.preventDefault(); handleNavClick('Courses', 'courses'); }}
          >
            Courses
          </a>
        </li>
        <li>
          <a 
            href="#aboutus" 
            className={activeLink === 'AboutUs' ? 'active-link' : ''} 
            onClick={(e) => { e.preventDefault(); handleNavClick('AboutUs', 'aboutus'); }}
          >
            About Us
          </a>
        </li>
        <li>
          <a 
            href="#sadhna" 
            className={activeLink === 'Sadhna' ? 'active-link' : ''} 
            onClick={(e) => { e.preventDefault(); handleNavClick('Sadhna', 'sadhna'); }}
          >
            Sadhna
          </a>
        </li>

        {/* Mobile Login Button */}
        <li className="mobile-login-container">
          <button className="mobile-admin-login-btn" onClick={handleLogin}>
            Admin Login
          </button>
        </li>
      </ul>

      {/* Desktop Login Button */}
      <div className="nav-right">
        <button className="login-btn" onClick={handleLogin}>
          Login
        </button>
      </div>
    </nav>
  );
}

export default Navbar;