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

export const doorColor = (event)=>{
  return {
    type: actionType.DOOR_COLOR,
    event: event
  };
};

export const doorStepNext = ()=>{
  return {
    type: actionType.DOOR_STEP_NEXT
  };
};

export const doorStepBack = ()=>{
  return {
    type: actionType.DOOR_STEP_BACK
  };
};

export const doorBeemAdd = ()=>{
  return {
    type: actionType.DOOR_BEEM_ADD
  };
};

export const doorBeemRemove = ()=>{
  return {
    type: actionType.DOOR_BEEM_REMOVE
  };
};

export const doorPostsAdd = ()=>{
  return {
    type: actionType.DOOR_POSTS_ADD
  };
};

export const doorPostsRemove = ()=>{
  return {
    type: actionType.DOOR_POSTS_REMOVE
  };
};