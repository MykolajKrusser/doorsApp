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
    default: return state;
  }
};

export default reducer;