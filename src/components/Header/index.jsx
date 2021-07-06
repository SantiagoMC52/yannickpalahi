import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
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
            <NavLink to="/">YP</NavLink>
            <NavLink to="/projects">projects</NavLink>
            <NavLink to="/aboutme">about</NavLink>
            <NavLink to="/contact">contact</NavLink>
          </nav>
        ) : ''
      }
      </div>

      <div className="desktop-navbar">
        <nav className="desktop-navbar__initials">
          <NavLink
            exact
            activeStyle={{ opacity: 0.5 }}
            to="/"
          >
            YP
          </NavLink>
        </nav>
        <nav className="desktop-navbar__nav">
          <NavLink
            exact
            activeStyle={{ opacity: 0.5 }}
            to="/projects"
          >
            projects
          </NavLink>
          <NavLink
            exact
            activeStyle={{ opacity: 0.5 }}
            to="/aboutme"
          >
            about
          </NavLink>
          <NavLink
            exact
            activeStyle={{ opacity: 0.5 }}
            to="/contact"
          >
            contact
          </NavLink>
        </nav>
      </div>
    </>
  );
};

export default Header;
