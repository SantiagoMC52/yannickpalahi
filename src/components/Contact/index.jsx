/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Helmet } from 'react-helmet';
import DarkHeader from '../DarkHeader';
import './contact.scss';

const Contact = () => (
  <>
    <Helmet>
      <style>{'body { background-color: black; color: white }'}</style>
    </Helmet>

    <DarkHeader />
    <section className="contact-container">
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

export default Contact;
