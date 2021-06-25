import { combineReducers } from 'redux';
import informationReducer from './informationReducer';
import selectedInfoReducer from './selectedInfoReducer';

const rootReducer = combineReducers({
  info: informationReducer,
  selectedInfo: selectedInfoReducer
});

export default rootReducer;
