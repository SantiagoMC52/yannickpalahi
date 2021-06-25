import PROJECTS from '../../constants/projects-mock';
import actionTypes from '../actions/actionTypes';

function projectsReducer(projects = [], action) {
  let updatedProjects = [...projects];

  switch (action.type) {
    case actionTypes.LOAD_PROJECTS:
      updatedProjects = PROJECTS;
      break;
    default:
      updatedProjects = PROJECTS;
      break;
  }
  return updatedProjects;
}

export default projectsReducer;
