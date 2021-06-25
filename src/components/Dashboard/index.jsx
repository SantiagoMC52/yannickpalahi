/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { loadInfo } from '../../redux/actions/actionCreators';

const Dashboard = () => {
  const info = useSelector((store) => store.info);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!info.lenght) dispatch(loadInfo());
  });

  return (
    <>
      <ul>
        {
          info.map((detail) => (
            <Link to={`/detail/${detail.id}`}>
              <li key={detail.id}>{detail.name}</li>
            </Link>
          ))
        }
      </ul>
    </>
  );
};
export default Dashboard;
