/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProjectById } from '../../redux/actions/actionCreators';

const Detail = () => {
  const selectedProject = useSelector((store) => store.selectedProject);
  const dispatch = useDispatch();
  const { projectId } = useParams();

  useEffect(() => {
    dispatch(getProjectById(projectId));
  }, [projectId]);

  return (
    <>
      <h2>{selectedProject?.name}</h2>
      <h3>{selectedProject?.client}</h3>
      <iframe src={selectedProject?.link} frameBorder="0" allowFullScreen />
    </>
  );
};
export default Detail;
