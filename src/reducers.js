import { combineReducers } from 'redux';
import homeReducer from './containers/home/duck';
import userReducer from './containers/user/duck';

export default combineReducers({
  homeReducer,
  userReducer
});
