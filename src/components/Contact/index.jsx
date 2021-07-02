import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Divide as Hamburger } from 'hamburger-react';
import '../Header/header.scss';
import './contact.scss';

const Contact = () => {
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
            <Link to="/projects">Projects</Link>
            <Link to="/aboutme">About</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        ) : ''
      }
      </div>

      <div className="desktop-navbar">
        <nav className="desktop-navbar__initials">
          <Link to="/">YP</Link>
        </nav>
        <nav className="desktop-navbar__nav">
          <Link to="/projects">Projects</Link>
          <Link to="/aboutme">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>

      <section className="contact-container">
        <Helmet>
          <style>{'body { background-color: black; color: white }'}</style>
        </Helmet>
        <div className="contact-container__text">
          <h2>get in touch</h2>
          <h4>let`s work together, say hello</h4>
        </div>

        <div className="contact-container__media">
          <p>657050235</p>
          <p>yannickpalahi@gmail.com</p>
          <a href="https://vimeo.com/user110474883" target="_blank" rel="noreferrer">vimeo</a>
          <a href="https://www.instagram.com/ypalahi/" target="_blank" rel="noreferrer">instagram</a>
        </div>
      </section>
    </>
  );
};

export default Contact;
