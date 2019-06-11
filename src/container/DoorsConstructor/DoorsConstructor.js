import React, {Component} from 'react';
import {connect} from 'react-redux';
import errorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import axios from 'axios';
import classes from './DoorsConstructor.css';

import * as action from '../../store/actions/actionTypes';
import * as actions from '../../store/actions/index';

import StepView from '../../components/StepView/StepView';
import DoorView from '../../components/DoorView/DoorView';

export class DoorsConstructor extends Component{

  render(){
    return(
      <div className={classes.DoorsConstructor}>
        <StepView/>
        <div className={classes.DoorsConstrView}>
          <DoorView/>
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(errorHandler(DoorsConstructor, axios));