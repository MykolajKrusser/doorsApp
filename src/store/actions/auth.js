import * as actionType from './actionTypes';
import axios from 'axios';

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
    let url = 'https://bench-api.applover.pl/api/v1/session';
    axios.post(url, authData)
      .then( response =>{
        dispatch(DelaedAuthSuccess(response))
      })
      .catch(err=>{
        dispatch(authFail(err));
      });
  };
};

