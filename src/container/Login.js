import React, {Component} from 'react';
import {connect} from 'react-redux';
import errorHandler from '../hoc/withErrorHandler/withErrorHandler';
import axios from 'axios';
import classes from './Login.css';

import * as action from '../store/actions/actionTypes';

export class Login extends Component{
  render(){
    console.log(this.props.password)
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
          <input type="checkbox"/>
          <label htmlFor="scales">Keep me logged in</label>
        </div>
        <button onClick={this.props.onLogin}>Login</button>
      </div>
    );
  }
}

const mapStateToProps = state =>{
  return {
    email: state.auth.email,
    password: state.auth.password
  };
};

const mapDispatchToProps = dispatch =>{
  return{
    onChangeEmail: (event)=> dispatch({type: action.AUTH_EMAIL, event: event}),
    onChangePassword: (event)=> dispatch({type: action.AUTH_PASSWORD, event: event})
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(errorHandler(Login, axios));