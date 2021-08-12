import React from 'react';
import './dashboard.scss';
import { Helmet } from 'react-helmet';
import Header from '../Header';
import dashboardVideo from '../../assets/intro.mp4';

const Dashboard = () => (
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

    <Header style={{ color: 'white' }} />
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
export default Dashboard;
