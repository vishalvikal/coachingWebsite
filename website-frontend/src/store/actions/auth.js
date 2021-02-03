import {apiCall, setTokenheader} from '../../services/api';
import {SET_CURRENT_USER} from '../actionTypes';
import {addError, removeError} from './errors';

export function setCurrentUser(user){
  return{
    type:SET_CURRENT_USER,
    user
  }
}

export function setAuthorizationToken(token){
  setTokenheader(token);

}

export function logout(){
  return dispatch=>{
    localStorage.clear();
    setAuthorizationToken(false);
    dispatch(setCurrentUser({}));
  }
}

export function authuser(type, userData){
  return dispatch=>{
    return new Promise((resolve, reject)=>{
      return apiCall('post', `/api/user/auth${type}`, userData)
                .then(({token, ...user})=>{
                  localStorage.setItem('jwtToken', token);
                  dispatch(setCurrentUser(user));
                  dispatch(removeError());
                  resolve();
                })
                .catch(err=>{
                  dispatch(addError(err.message));
                  reject();
                })
    })
  }
}