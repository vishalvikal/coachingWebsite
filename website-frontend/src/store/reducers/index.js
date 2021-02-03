import  currentUser  from './currentUser';
import errors from './errors';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  currentUser,
  errors
})


export default rootReducer;

