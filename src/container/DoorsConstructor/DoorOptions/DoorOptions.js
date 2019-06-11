import React, {Component} from 'react';
import {connect} from 'react-redux';
import errorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import axios from 'axios';
import classes from './DoorOptions.css';

import * as action from '../../store/actions/actionTypes';
import * as actions from '../../store/actions/index';

export class DoorOptions extends Component{

  render(){
    return(
      <div className={classes.DoorOptions}>
       
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

export default connect(mapStateToProps, mapDispatchToProps)(errorHandler(DoorOptions, axios));