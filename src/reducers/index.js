import { combineReducers } from 'redux';
import carList from './car-list';

const rootReducer = combineReducers({
  carList: carList,
});

export default rootReducer;
