import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Divide as Hamburger } from 'hamburger-react';
import './header.scss';

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <div className="top-container">
        <Hamburger toggled={isOpen} toggle={setOpen} duration={0.8} color="#e94d1d" />
      </div>
      <div className="navbar-container">
        {
        isOpen ? (
          <nav className="navbar-container__nav">
            <Link to="/">Y.P</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/aboutme">About Me</Link>
          </nav>
        ) : ''
      }
      </div>

      <div className="desktop-navbar">
        <nav className="desktop-navbar__nav">
          <Link to="/">Y.P</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/aboutme">About Me</Link>
        </nav>
      </div>
    </>
  );
};

export default Header;