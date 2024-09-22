import React, { useState } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <nav className={`navbar ${isOpen ? 'open' : ''}`}>
        <Link to="hero" smooth={true} duration={500} onClick={toggleMenu}>Home</Link>
        <Link to="about" smooth={true} duration={500} onClick={toggleMenu}>About</Link>
        <h1 className="logo">Fil's Flooring Inc</h1>
        <Link to="our-work" smooth={true} duration={500} onClick={toggleMenu}>Our Work</Link>
        <Link to="contact" smooth={true} duration={500} onClick={toggleMenu}>Contact</Link>
      </nav>
    </header>
  );
};

export default Navbar;