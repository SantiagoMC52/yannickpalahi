/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getTaskById } from '../../redux/actions/actionCreators';

const Detail = () => {
  const selectedInfo = useSelector((store) => store.selectedInfo);
  const dispatch = useDispatch();
  const { projectId } = useParams();

  useEffect(() => {
    dispatch(getTaskById(projectId));
  }, [projectId]);

  return (
    <>
      <h2>{selectedInfo?.name}</h2>
      <h3>{selectedInfo?.client}</h3>
      <iframe width="560" height="315" src={selectedInfo?.link} frameBorder="0" allowFullScreen />
    </>
  );
};
export default Detail;
