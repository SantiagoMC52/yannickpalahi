import React from 'react';
import './contact.scss';
import { Helmet } from 'react-helmet';

const Contact = () => (

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

);

export default Contact;
