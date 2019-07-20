import {combineReducers} from 'redux';
import AuthReducer from './authReducer.js';

const allReducers= combineReducers({
  user: AuthReducer,
});

export default allReducers;
