import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-scroll';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h1>Sahil</h1>
      </div>

      {/* Hamburger for mobile */}
      <div className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={handleToggle}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      {/* Right side menu */}
      <div className={`navbar-right ${menuOpen ? 'show' : ''}`}>
        <ul className="nav-links">
          <li><Link to="hero" smooth={true} duration={500} onClick={closeMenu}>Home</Link></li>
          <li><Link to="about" smooth={true} duration={500} onClick={closeMenu}>About</Link></li>
          <li><Link to="projects" smooth={true} duration={500} onClick={closeMenu}>Projects</Link></li>
          <li><Link to="contact" smooth={true} duration={500} onClick={closeMenu}>Contact</Link></li>
        </ul>
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
