import React, {Component} from 'react';
import {connect} from 'react-redux';
import errorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import axios from 'axios';
import classes from './DoorsConstructor.css';

import * as action from '../../store/actions/actionTypes';
import * as actions from '../../store/actions/index';

import StepView from '../../components/StepView/StepView';
import DoorView from '../../components/DoorView/DoorView';
import DoorOptions from './DoorOptions/DoorOptions';

export class DoorsConstructor extends Component{

  render(){
    return(
      <div className={classes.DoorsConstructor}>
        <StepView/>
        <div className={classes.DoorsConstrContainer}>
          <div className={classes.DoorsConstrView}>
            <div className={classes.SizeView} style={{transform: 'translate(0px, 250px)'}}>250</div>
            <DoorView/>
            <DoorView/>
            <div className={classes.SizeView} style={{transform: 'translate(-115px, 55px)'}}>120</div>
            <div className={classes.SizeView} style={{transform: 'translate(-200px, 450px)'}}>120</div>
          </div>
          <DoorOptions/>
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