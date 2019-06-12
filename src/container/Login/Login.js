import React, {Component} from 'react';
import {connect} from 'react-redux';
import errorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import axios from 'axios';
import classes from './Login.css';

import * as action from '../../store/actions/actionTypes';
import * as actions from '../../store/actions/index';

export class Login extends Component{

  componentDidMount(){
    if(JSON.parse(localStorage.getItem("token"))){
      let token = JSON.parse(localStorage.getItem("token"));
      let organization = JSON.parse(localStorage.getItem("organization"));
      this.props.onAutoLogin(token, organization);
    };
  };

  loginHandler = (event)=>{
    event.preventDefault();
    this.props.onLogin(this.props.email, this.props.password);
  };

  render(){
    return(
      <div className={classes.Login}>
        <h1>Log in</h1>
        <input 
          placeholder="Email address" 
          type="email" 
          onChange={this.props.onChangeEmail} 
          value={this.props.email}
        />
        <input 
          placeholder="Password" 
          type="password" 
          onChange={this.props.onChangePassword} 
          value={this.props.password}
        />
        <div className={classes.Checkbox}>
          <input type="checkbox" onChange={this.props.onAutoLogOut}/>
          <label htmlFor="scales">Keep me logged in</label>
        </div>
        <button disabled={this.props.loading} onClick={this.loginHandler}>Login</button>
      </div>
    );
  }
}

const mapStateToProps = state =>{
  return {
    email: state.auth.email,
    password: state.auth.password,
    token: state.auth.token,
    organization: state.auth.organization,
    loading: state.auth.loading,
    autoLogOut: state.auth.autoLogOut
  };
};

const mapDispatchToProps = dispatch =>{
  return{
    onChangeEmail: (event)=> dispatch({type: action.AUTH_EMAIL, event: event}),
    onChangePassword: (event)=> dispatch({type: action.AUTH_PASSWORD, event: event}),
    onLogin: (email, password)=> dispatch(actions.auth(email, password)),
    onAutoLogOut: (event)=> dispatch({type: action.AUTH_AUTO_LOGOUT, event: event}),
    onAutoLogin: (token, organization)=> dispatch({type: action.AUTH_AUTO_LOGIN, token: token, organization: organization}),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(errorHandler(Login, axios));