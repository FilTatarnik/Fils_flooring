import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-scroll';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header>
      <h1 className="logo"><Link to="home" smooth={true} duration={500} className="no-link-style">MUNCHY</Link></h1>
      <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <nav ref={navRef} className={`navbar ${isOpen ? 'open' : ''}`}>
        <Link to="home" smooth={true} duration={500} onClick={toggleMenu}>Home</Link>
        <Link to="recipes" smooth={true} duration={500} onClick={toggleMenu}>Recipes</Link>
        <Link to="workouts" smooth={true} duration={500} onClick={toggleMenu}>Workouts</Link>
        <Link to="about" smooth={true} duration={500} onClick={toggleMenu}>About us</Link>
      </nav>
    </header>
  );
};

export default NavBar;