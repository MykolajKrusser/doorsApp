import * as actionTypes from '../actions/actionTypes';

const initState = {
  email: '',
  password: '',
  token: null,
  organization: null,
  autoLogOut: false,
  error: null,
  loading: false,
}

const reducer = (state=initState, action)=>{
  switch(action.type){
    case actionTypes.AUTH_EMAIL:
      return{
        ...state,
        email: action.event.target.value
      }
    case actionTypes.AUTH_PASSWORD:
      return{
        ...state,
        password: action.event.target.value
      }
    case actionTypes.AUTH_START:
      return{
        ...state,
        error: null,
        loading: true
      }
    case actionTypes.AUTH_SUCCESS:
      if(state.autoLogOut === false || state.autoLogOut === undefined){
        localStorage.removeItem('token');
        localStorage.removeItem('organization');
      }
      if(state.autoLogOut === 'on'){
        let token = action.data.token; 
        let organization= action.data.organization;
        localStorage.setItem('token', JSON.stringify(token));
        localStorage.setItem('organization', JSON.stringify(organization));
      }

      return{
        ...state,
        token: action.data.token,
        organization: action.data.organization,
        error: null,
        loading: false,
        autoLogOut: false
      }
    case actionTypes.AUTH_FAIL:
      return{
        error: action.error,
        loading: false
      }
    case actionTypes.AUTH_AUTO_LOGIN:
      return{
        ...state,
        token: action.token,
        organization: action.organization
      }
    case actionTypes.AUTH_AUTO_LOGOUT:
      return{
        ...state,
        autoLogOut: action.event.target.value
      }
    default: return state;
  }
};

export default reducer;