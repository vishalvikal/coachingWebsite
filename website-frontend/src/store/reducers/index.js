import  {currentUser } from './currentUser';
import {errors} from './errors';
import {combineReducers} from 'redux';

export default function rootReducer(){
return combineReducers({
  currentUser,
  errors
})
}


