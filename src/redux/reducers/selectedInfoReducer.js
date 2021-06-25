import actionTypes from '../actions/actionTypes';

function selectedInfoReducer(video = {}, action) {
  let selectedVideo = { ...video };

  switch (action.type) {
    case actionTypes.LOAD_DETAIL:
      selectedVideo = action.video;
      break;
    default:
      selectedVideo = video;
      break;
  }
  return selectedVideo;
}

export default selectedInfoReducer;
