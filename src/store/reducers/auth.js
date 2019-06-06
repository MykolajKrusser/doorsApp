import * as actionTypes from '../actions/actionTypes';

const initState = {
  token: null,
  error: null,
  loading: false,
}

const reducer = (state=initState, action)=>{
  switch(action.type){
    case actionTypes.AUTH_START:
    return{
      ...state,
      error: null,
      loading: true
    }
    case actionTypes.AUTH_SUCCESS:
    return{
      ...state,
      error: null,
      loading: false,
    }
    case actionTypes.AUTH_FAIL:
    return{
      error: action.error,
      loading: false
    }
    case actionTypes.AUTH_LOGOUT:
    return{
      ...state,
      token: null,
    }
    default: return state;
  }
};

export default reducer;