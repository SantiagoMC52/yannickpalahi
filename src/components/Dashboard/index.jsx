import React from 'react';
import './dashboard.scss';
import Header from '../Header';
import dashboardVideo from '../../assets/intro.mp4';

const Dashboard = () => (
  <>
    <video
      autoPlay
      loop
      muted
      className="intro"
    >
      <source src={dashboardVideo} type="video/mp4" />
    </video>
    <Header />
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
