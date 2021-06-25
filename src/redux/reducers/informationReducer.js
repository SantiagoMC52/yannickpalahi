/* eslint-disable no-unused-vars */
import VIDEOS from '../../constants/videos-mock';
import actionTypes from '../actions/actionTypes';

function informationReducer(videos = [], action) {
  let newVideos;
  switch (action.type) {
    case actionTypes.LOAD_INFO:
      newVideos = VIDEOS;
      break;
    default:
      newVideos = VIDEOS;
      break;
  }
  return newVideos;
}

export default informationReducer;
