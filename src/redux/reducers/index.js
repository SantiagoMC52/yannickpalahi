import { combineReducers } from 'redux';
import informationReducer from './informationReducer';

const rootReducer = combineReducers({
  info: informationReducer
});

export default rootReducer;
