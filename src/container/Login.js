import React, {Component} from 'react';
import {connect} from 'react-redux';
import errorHandler from '../hoc/withErrorHandler/withErrorHandler';
import axios from 'axios';
import classes from './Login.css';

export class Login extends Component{
  render(){
    return(
      <div className={classes.Login}>
        <h1>Log in</h1>
        <input placeholder="Email address" type="text"/>
        <input placeholder="Password" type="password"/>
        <div className={classes.Checkbox}>
          <input type="checkbox"/>
          <label htmlFor="scales">Keep me logged in</label>
        </div>
        <button>Login</button>
      </div>
    );
  }
}
const mapStateToProps = state =>{
  return {
      
  };
};
const mapDispatchToProps = dispatch =>{
  return{
      
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(errorHandler(Login, axios));