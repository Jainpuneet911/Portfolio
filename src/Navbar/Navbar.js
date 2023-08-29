// Navbar.js
import React from 'react';
import './Navbar.css';
import { Link } from 'react-scroll'; // Import Link from react-scroll

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
      <Link to="introduction" spy={true} smooth={true} offset={0} duration={500}>
    <span className="navbar-name">Puneet Jain</span>
    </Link>
      </div>
      <div className="navbar-right">
        {/* Use Link from react-scroll */}
        <Link to="about-me" spy={true} smooth={true} offset={-70} duration={500}>About</Link>
        <Link to="skill" spy={true} smooth={true} offset={-70} duration={500}>Skills</Link>
        <Link to="projects" spy={true} smooth={true} offset={-70} duration={500}>Projects</Link>
        <Link to="contact" spy={true} smooth={true} offset={-70} duration={500}>Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
