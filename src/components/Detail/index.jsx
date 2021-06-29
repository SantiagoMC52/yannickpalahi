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
      <div className="main-container__title">
        <h2>{selectedProject?.title}</h2>
      </div>
      {selectedProject?.link
        ? (
          <iframe
            className="main-container__frame"
            src={selectedProject?.link}
            frameBorder="0"
            allowFullScreen
          />
        ) : ''}
      <div className="main-container__extra">
        <span>{selectedProject?.type}</span>
        <span>{selectedProject?.year}</span>
      </div>
      <div className="main-container__description">
        {selectedProject?.description
          ? (
            <>
              {selectedProject?.description}
            </>
          ) : ''}
      </div>
      <ul className="main-container__ul">
        {selectedProject?.producer
          ? (
            <li>
              Written, directed and produced by
              {' '}
              {selectedProject?.producer}
            </li>
          ) : '' }
        {selectedProject?.creator
          ? (
            <li>
              .Futuro is
              {' '}
              {selectedProject?.creator}
            </li>
          ) : ''}
        {selectedProject?.dop
          ? (
            <li>
              DOP,
              {' '}
              {selectedProject?.dop}
            </li>
          ) : ''}
        {selectedProject?.artDirection
          ? (
            <li>
              Art direction,
              {' '}
              {selectedProject?.artDirection}
            </li>
          ) : ''}
        {selectedProject?.focus
          ? (
            <li>
              Focus puller,
              {' '}
              {selectedProject?.focus}
            </li>
          ) : ''}
        {selectedProject?.camAssistant
          ? (
            <li>
              Camera assistant,
              {' '}
              {selectedProject?.camAssistant}
            </li>
          ) : ''}
        {selectedProject?.artAssistant
          ? (
            <li>
              Art assistant,
              {' '}
              {selectedProject?.artAssistant}
            </li>
          ) : ''}
        {selectedProject?.producer
          ? (
            <li>
              Production,
              {' '}
              {selectedProject?.producer}
            </li>
          ) : ''}
        {selectedProject?.productionAssistant
          ? (
            <li>
              Production assistant,
              {' '}
              {selectedProject?.productionAssistant}
            </li>
          ) : ''}
        {selectedProject?.car
          ? (
            <li>
              Car by,
              {' '}
              {selectedProject?.car}
            </li>
          ) : ''}
        {selectedProject?.music
          ? (
            <li>
              Musci,
              {' '}
              {selectedProject?.music}
            </li>
          ) : ''}
        {selectedProject?.color
          ? (
            <li>
              Color grading,
              {' '}
              {selectedProject?.color}
            </li>
          ) : ''}
        {selectedProject?.graphicDesigner
          ? (
            <li>
              Graphic designer,
              {' '}
              {selectedProject?.graphicDesigner}
            </li>
          ) : ''}
        {selectedProject?.compositing
          ? (
            <li>
              Compositing,
              {' '}
              {selectedProject?.compositing}
            </li>
          ) : ''}
        {selectedProject?.matte
          ? (
            <li>
              Matte Painting,
              {' '}
              {selectedProject?.matte}
            </li>
          ) : ''}
        {selectedProject?.editing
          ? (
            <li>
              Editing,
              {' '}
              {selectedProject?.editing}
            </li>
          ) : ''}
        {selectedProject?.artSupplier
          ? (
            <li>
              Production assistant,
              {' '}
              {selectedProject?.artSupplier}
            </li>
          ) : ''}
        {selectedProject?.coming
          ? (
            <li>
              {selectedProject?.coming}
            </li>
          ) : ''}
      </ul>
    </section>
  );
};
export default Detail;
