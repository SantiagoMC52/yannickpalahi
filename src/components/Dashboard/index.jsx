import React from 'react';
import './dashboard.scss';
import Header from '../Header';

const Dashboard = () => (
  <>
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
