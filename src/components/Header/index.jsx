/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Divide as Hamburger } from 'hamburger-react';
import './header.scss';

const Header = ({ style }) => {
  const [isOpen, setOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <div className="top-container">
        {
          location.pathname === '/' || location.pathname === '/contact'
            ? <Hamburger toggled={isOpen} toggle={setOpen} duration={0.8} color="#ffffff" />
            : <Hamburger toggled={isOpen} toggle={setOpen} duration={0.8} color="#000000" />
        }

      </div>
      <div className="navbar-container">
        {
        isOpen ? (
          <nav className="navbar-container__nav">
            <NavLink style={style} to="/">YP</NavLink>
            <NavLink style={style} to="/projects">projects</NavLink>
            <NavLink style={style} to="/aboutme">about</NavLink>
            <NavLink style={style} to="/contact">contact</NavLink>
          </nav>
        ) : ''
      }
      </div>

      <div className="desktop-navbar">
        <nav className="desktop-navbar__initials">
          <NavLink
            exact
            activeStyle={{ opacity: 0.5 }}
            style={style}
            to="/"
          >
            YP
          </NavLink>
        </nav>
        <nav className="desktop-navbar__nav">
          <NavLink
            exact
            activeStyle={{ opacity: 0.5 }}
            style={style}
            to="/projects"
          >
            projects
          </NavLink>
          <NavLink
            exact
            activeStyle={{ opacity: 0.5 }}
            style={style}
            to="/aboutme"
          >
            about
          </NavLink>
          <NavLink
            exact
            activeStyle={{ opacity: 0.5 }}
            style={style}
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
