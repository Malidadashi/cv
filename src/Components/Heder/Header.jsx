// src/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './header.css'
import BackToTopButton from '../../Hooks/BackToTopButton/BackToTopButton';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">MAD</Link>
      </div>
      <nav>
        <ul className="nav-links">
          <li><a href='/h'>about test</a></li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/skills">Skills</Link></li>
          <li><Link to="/qualification">Qualification</Link></li>
          <li><Link to="/portfolio">Portfolio</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        <BackToTopButton/>
      </nav>
    </header>
  );
};

export default Header;
