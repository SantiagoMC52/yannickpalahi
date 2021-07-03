/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { loadProjects } from '../../redux/actions/actionCreators';
import Header from '../Header';
import './projects.scss';

const Projects = () => {
  const projects = useSelector((store) => store.projects);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!projects.lenght) dispatch(loadProjects());
  });

  return (
    <>
      <Header />
      <section className="list-container">
        <div>
          {
          projects.map((project) => (
            <Link to={`/detail/${project.id}`}>
              <span key={project.id}>{project.name}</span>
              <img src={project.image} alt="" width="100" />
            </Link>
          ))
        }
        </div>
      </section>
    </>
  );
};

export default Projects;
