import actionTypes from './actionTypes';
import PROJECTS from '../../constants/projects-mock';

export function loadProjects() {
  return {
    type: actionTypes.LOAD_PROJECTS
  };
}

export function loadProject(project) {
  return {
    type: actionTypes.LOAD_PROJECT,
    project
  };
}

export function getProjectById(projectId) {
  let project;
  const targetProject = PROJECTS.find((current) => current.id === +projectId);
  if (targetProject) { project = targetProject; } else { (project = {}); }

  return {
    type: actionTypes.LOAD_PROJECT,
    project
  };
}
