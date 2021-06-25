import actionTypes from '../actions/actionTypes';

function selectedProjectReducer(project = {}, action) {
  let selectedProject = { ...project };

  switch (action.type) {
    case actionTypes.LOAD_PROJECT:
      selectedProject = action.project;
      break;
    default:
      selectedProject = project;
      break;
  }
  return selectedProject;
}

export default selectedProjectReducer;
