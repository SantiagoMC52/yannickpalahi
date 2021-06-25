import actionTypes from './actionTypes';
import VIDEO from '../../constants/videos-mock';

export function loadInfo() {
  return {
    type: actionTypes.LOAD_INFO
  };
}

export function loadDetail(video) {
  return {
    type: actionTypes.LOAD_DETAIL,
    video
  };
}

export function getTaskById(projectId) {
  let video;
  const targetProject = VIDEO.find((current) => current.id === +projectId);
  if (targetProject) { video = targetProject; } else { (video = {}); }

  return {
    type: actionTypes.LOAD_DETAIL,
    video
  };
}
