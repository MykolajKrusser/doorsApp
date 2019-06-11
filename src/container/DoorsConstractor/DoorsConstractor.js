import React, {Component} from 'react';
import {connect} from 'react-redux';
import errorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import axios from 'axios';
import classes from './DoorsConstractor.css';

import * as action from '../../store/actions/actionTypes';
import * as actions from '../../store/actions/index';

export class DoorsConstractor extends Component{

  render(){
    return(
      <div className={classes.DoorsConstractor}>
        <h1>Doors Constractor</h1>
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

export default connect(mapStateToProps, mapDispatchToProps)(errorHandler(DoorsConstractor, axios));