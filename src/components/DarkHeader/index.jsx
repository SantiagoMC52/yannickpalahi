import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Divide as Hamburger } from 'hamburger-react';
import darkNavbar from './darkHeader.module.scss';

const DarkHeader = () => {
  const [isOpen, setOpen] = useState(false);

  return (

    <>
      <div className={darkNavbar.container}>
        <Hamburger toggled={isOpen} toggle={setOpen} duration={0.8} color="#ffffff" />
      </div>
      <div className={darkNavbar.navbar}>
        {
        isOpen ? (
          <nav className={darkNavbar.nav}>
            <Link to="/">YP</Link>
            <Link to="/projects">projects</Link>
            <Link to="/aboutme">about</Link>
            <Link to="/contact">contact</Link>
          </nav>
        ) : ''
      }
      </div>

      <div className={darkNavbar.desktop}>
        <nav className={darkNavbar.initials}>
          <Link to="/">YP</Link>
        </nav>
        <nav className={darkNavbar.nav}>
          <Link to="/projects">projects</Link>
          <Link to="/aboutme">about</Link>
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

export default DarkHeader;
