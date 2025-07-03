import React, { useState } from 'react';
import './Navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <h1 className="logo">Sahil</h1>
      <div className={`nav-links ${isOpen ? 'open' : ''}`}>
        <Link to="hero" smooth={true} duration={500} onClick={closeMenu}>Home</Link>
        <Link to="about" smooth={true} duration={500} onClick={closeMenu}>About</Link>
        <Link to="projects" smooth={true} duration={500} onClick={closeMenu}>Projects</Link>
        <Link to="contact" smooth={true} duration={500} onClick={closeMenu}>Contact</Link>
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
};

export default Navbar;
