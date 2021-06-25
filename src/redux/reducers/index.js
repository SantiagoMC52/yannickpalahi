import { combineReducers } from 'redux';
import projectsReducer from './projectsReducer';
import selectedProjectReducer from './selectedProjectReducer';

const rootReducer = combineReducers({
  projects: projectsReducer,
  selectedProject: selectedProjectReducer
});

export default rootReducer;
