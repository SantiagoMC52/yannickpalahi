import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Divide as Hamburger } from 'hamburger-react';
import './header.scss';

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <div className="top-container">
        <Hamburger toggled={isOpen} toggle={setOpen} duration={0.8} color="#000000" />
      </div>
      <div className="navbar-container">
        {
        isOpen ? (
          <nav className="navbar-container__nav">
            <Link to="/">YP</Link>
            <Link to="/projects">projects</Link>
            <Link to="/aboutme">about</Link>
            <Link to="/contact">contact</Link>
          </nav>
        ) : ''
      }
      </div>

      <div className="desktop-navbar">
        <nav className="desktop-navbar__initials">
          <Link to="/">YP</Link>
        </nav>
        <nav className="desktop-navbar__nav">
          <Link to="/projects">projects</Link>
          <Link to="/aboutme">about</Link>
          <Link to="/contact">contact</Link>
        </nav>
      </div>
    </>
  );
};

export default Header;
