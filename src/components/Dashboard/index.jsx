/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { loadProjects } from '../../redux/actions/actionCreators';
import './dashboard.scss';

const Dashboard = () => {
  const projects = useSelector((store) => store.projects);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!projects.lenght) dispatch(loadProjects());
  });

  return (
    <section className="list-container">
      <ul>
        {
          projects.map((project) => (
            <Link to={`/detail/${project.id}`}>
              <li key={project.id}>{project.name}</li>
            </Link>
          ))
        }
      </ul>
    </section>
  );
};
export default Dashboard;