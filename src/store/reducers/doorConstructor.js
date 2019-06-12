import * as actionTypes from '../actions/actionTypes';

const initState = {
  width: 120,
  height: 250,
  color: 'black',
  doorType: 'Single door',
  doorOptionStep: 1,
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
    default: return state;
  }
};

export default reducer;