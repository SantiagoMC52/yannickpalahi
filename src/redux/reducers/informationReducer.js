import VIDEOS from '../../constants/videos-mock';
import actionTypes from '../actions/actionTypes';

function informationReducer(videos = [], action) {
  let updatedVideos = [...videos];

  switch (action.type) {
    case actionTypes.LOAD_INFO:
      updatedVideos = VIDEOS;
      break;
    default:
      updatedVideos = VIDEOS;
      break;
  }
  return updatedVideos;
}

export default informationReducer;
