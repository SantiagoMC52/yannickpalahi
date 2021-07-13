import React, { useState } from 'react';
import './dashboard.scss';
import { Link, NavLink } from 'react-router-dom';
import { Divide as Hamburger } from 'hamburger-react';
import dashboardVideo from '../../assets/intro.mp4';
import contactHeader from '../Header/header.module.scss';

const Dashboard = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <video
        autoPlay
        loop
        muted
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

      <section className="dashboard-container">

        <p className="dashboard-container__year">2021</p>
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
