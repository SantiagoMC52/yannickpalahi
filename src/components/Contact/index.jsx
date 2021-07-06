/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link, NavLink } from 'react-router-dom';
import { Divide as Hamburger } from 'hamburger-react';
import './contact.scss';
import contactHeader from '../Header/header.module.scss';

const Contact = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <div className={contactHeader.container}>
        <Hamburger toggled={isOpen} toggle={setOpen} duration={0.8} color="#ffffff" />
      </div>
      <div className={contactHeader.navbar}>
        {
        isOpen ? (
          <nav className={contactHeader.nav}>
            <Link to="/">YP</Link>
            <Link to="/projects">projects</Link>
            <Link to="/aboutme">about</Link>
            <Link to="/contact">contact</Link>
          </nav>
        ) : ''
      }
      </div>

      <div className={contactHeader.desktop}>
        <nav className={contactHeader.initials}>
          <Link to="/">YP</Link>
        </nav>
        <nav className={contactHeader.nav}>
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

      <section className="contact-container">
        <Helmet>
          <style>{'body { background-color: black; color: white }'}</style>
        </Helmet>
        <div className="contact-container__text">
          <p className="contact-container__text-top">get in touch</p>
          <p className="contact-container__text-bottom">let's work together, say hello</p>
        </div>

        <div className="contact-container__media">
          <p>657 05 02 35</p>
          <p>yannickpalahi@gmail.com</p>
          <a href="https://vimeo.com/user110474883" target="_blank" rel="noreferrer">vimeo</a>
          <a href="https://www.instagram.com/ypalahi/" target="_blank" rel="noreferrer">instagram</a>
        </div>
      </section>
    </>
  );
};

export default Contact;
