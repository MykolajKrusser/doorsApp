import * as actionType from './actionTypes';
import axios from '../../axios-config';

export const authEmail = (event)=>{
  return {
    type: actionType.AUTH_EMAIL,
    event: event
  };
};

export const authPassword = (event)=>{
  return {
    type: actionType.AUTH_PASSWORD,
    event: event
  };
};

export const authStart = ()=>{
  return {
    type: actionType.AUTH_START
  };
};

export const authSuccess = (data)=>{
  return {
    type: actionType.AUTH_SUCCESS,
    data: data
  };
};

export const DelaedAuthSuccess = (data)=>{
  return dispatch => {
    setTimeout(()=>{
      dispatch(authSuccess(data));
    }, 2000)
  };
};

export const authFail = (error)=>{
  return {
    type: actionType.AUTH_FAIL,
    error: error
  };
};

export const auth = (email, password)=>{
  return dispatch=>{
    dispatch(authStart());
    const authData = {
      'email': email,
      'password': password,
    }
    const session = '/session';
    axios.post(session, authData)
      .then( response =>{
        dispatch(DelaedAuthSuccess(response.data))
      })
      .catch(err=>{
        dispatch(authFail(err));
      });
  };
};

export const autoLogOut = (event)=>{
  return {
    type: actionType.AUTH_AUTO_LOGOUT,
    event: event
  };
};

export const autoLogin = (token, organization)=>{
  return {
    type: actionType.AUTH_AUTO_LOGIN,
    token: token, 
    organization: organization
  };
};


