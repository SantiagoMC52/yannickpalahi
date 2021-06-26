/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProjectById } from '../../redux/actions/actionCreators';
import './detail.scss';

const Detail = () => {
  const selectedProject = useSelector((store) => store.selectedProject);
  const dispatch = useDispatch();
  const { projectId } = useParams();

  useEffect(() => {
    dispatch(getProjectById(projectId));
  }, [projectId]);

  return (
    <section className="main-container">
      <iframe className="video-frame" src={selectedProject?.link} frameBorder="0" allowFullScreen />
      <div className="details-container">
        <h2>{selectedProject?.name}</h2>
        <h3>
          Client:
          {' '}
          {selectedProject?.client}
        </h3>
      </div>
    </section>
  );
};
export default Detail;
