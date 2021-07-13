import React, { useState } from 'react';
import './dashboard.scss';
import { Link, NavLink } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Divide as Hamburger } from 'hamburger-react';
import dashboardVideo from '../../assets/intro.mp4';
import contactHeader from '../Header/header.module.scss';

const Dashboard = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <Helmet>
        <style>{'body { background-color: black; color: white }'}</style>
      </Helmet>
      <video
        autoPlay
        loop
        muted
        playsinline
        className="intro"
      >
        <source src={dashboardVideo} type="video/mp4" />
      </video>

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

      <section className="dashboard-container">

        <div className="dashboard-container__name">
          <p>yannick palahí</p>
        </div>

        <div className="dashboard-container__extra">
          <p>art department</p>
        </div>

      </section>
    </>
  );
};
export default Dashboard;
