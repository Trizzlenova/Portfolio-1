import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <h1 className="header__logo">My Portfolio Page</h1>
      <nav className="header__nav">
        <Link to="/" className="header__nav-item">HOME</Link>
        <Link to="/about" className="header__nav-item">ABOUT</Link>
        <Link to="/projects" className="header__nav-item">PROJECTS</Link>
        <Link to="/contact" className="header__nav-item">CONTACT</Link>
      </nav>
    </header>
  );
};

export default Header;