import * as actionType from './actionTypes';

export const doorWidth = (event)=>{
  return {
    type: actionType.DOOR_WIDTH,
    event: event
  };
};

export const doorHeight = (event)=>{
  return {
    type: actionType.DOOR_HEIGHT,
    event: event
  };
};

export const doorType = (event)=>{
  return {
    type: actionType.DOOR_TYPE,
    event: event
  };
};