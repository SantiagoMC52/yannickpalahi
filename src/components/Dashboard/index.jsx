import React from 'react';
import './dashboard.scss';
import Header from '../Header';

const Dashboard = () => (
  <>
    <Header />
    <section className="dashboard-container">

      <div className="dashboard-container__name">
        <h3>yannick palahí</h3>
      </div>

      <div className="dashboard-container__extra">
        <h4>art department</h4>
      </div>

    </section>
  </>
);
export default Dashboard;
