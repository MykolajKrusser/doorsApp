import * as actionTypes from '../actions/actionTypes';

const initState = {
  width: 120,
  height: 250,
  color: 'Black',
  doorType: 'Single door',
  doorOptionStep: 1,
  doorBeems: 4,
  doorPosts: 2
}

const reducer = (state=initState, action)=>{
  switch(action.type){
    case actionTypes.DOOR_WIDTH:
      return{
        ...state,
        width: action.event.target.value
      }
    case actionTypes.DOOR_HEIGHT:
      return{
        ...state,
        height: action.event.target.value
      }
    case actionTypes.DOOR_TYPE:
      return{
        ...state,
        doorType: action.event.target.value
      }
    case actionTypes.DOOR_COLOR:
      return{
        ...state,
        color: action.event.target.value
      }
    case actionTypes.DOOR_STEP_NEXT:
      let stepCount = 1;
      let currentStep = state.doorOptionStep;
      currentStep = currentStep + stepCount;
      if(currentStep > 3){
        currentStep = 3
      }
      return{
        ...state,
        doorOptionStep: currentStep
      }
    case actionTypes.DOOR_STEP_BACK:
      let stepCountBack = 1;
      let currentStepBack = state.doorOptionStep;
      currentStepBack = currentStepBack - stepCountBack;
      if(currentStepBack < 1){
        currentStepBack = 1
      }
      return{
        ...state,
        doorOptionStep: currentStepBack
      }
    case actionTypes.DOOR_BEEM_ADD:
      let beemAdd = 1;
      let currentBeems = state.doorBeems;
      currentBeems = currentBeems + beemAdd;
      if(currentBeems > 4){
        currentBeems = 4
      }
      return{
        ...state,
        doorBeems: currentBeems
      }
    case actionTypes.DOOR_BEEM_REMOVE:
      let beemRemove = 1;
      let currentBeem = state.doorBeems;
      currentBeem = currentBeem - beemRemove;
      if(currentBeem < 1){
        currentBeem = 1
      }
      return{
        ...state,
        doorBeems: currentBeem
      }
    case actionTypes.DOOR_POSTS_ADD:
      let postsAdd = 1;
      let currentPosts= state.doorPosts;
      currentPosts = currentPosts + postsAdd;
      if(currentPosts > 4){
        currentPosts = 4
      }
      return{
        ...state,
        doorPosts: currentPosts
      }
    case actionTypes.DOOR_POSTS_REMOVE:
      let postsRemove = 1;
      let currentPost= state.doorPosts;
      currentPost = currentPost - postsRemove;
      if(currentPost < 1){
        currentPost = 1
      }
      return{
        ...state,
        doorPosts: currentPost
      }
    default: return state;
  }
};

export default reducer;