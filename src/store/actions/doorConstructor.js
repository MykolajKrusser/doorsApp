import * as actionType from './actionTypes';

export const autoLogOut = (event)=>{
  return {
    type: actionType.AUTH_AUTO_LOGOUT,
    event: event
  };
};