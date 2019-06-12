import React, {Component} from 'react';
import {connect} from 'react-redux';
import errorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import axios from 'axios';
import classes from './DoorsConstructor.css';
import Wrap from '../../hoc/Wrap/Wrap';

//import * as action from '../../store/actions/actionTypes';
//import * as actions from '../../store/actions/index';

import StepView from '../../components/StepView/StepView';
import DoorView from '../../components/DoorView/DoorView';
import DoorOptions from './DoorOptions/DoorOptions';

export class DoorsConstructor extends Component{

  render(){
    console.log(this.props.doorOptionStep)
     let doors = <DoorView/>
     
     if(this.props.doorType === "Double door"){
        doors = (
          <Wrap>
            <DoorView/>
            <DoorView/>
          </Wrap>
        )
    }

    return(
      <div className={classes.DoorsConstructor}>
        <StepView currentStep={this.props.doorOptionStep}/>
        <div className={classes.DoorsConstrContainer}>
          <div className={classes.DoorsConstrView}>
            <div className={classes.SizeView} style={{transform: 'translate(0px, 250px)'}}>{this.props.doorHeight}</div>
            {doors}
            <div className={classes.SizeView} style={{transform: 'translate(-125px, 55px)'}}>{this.props.doorWidth}</div>
            <div className={classes.SizeView} style={{transform: 'translate(-215px, 450px)'}}>{this.props.doorWidth}</div>
          </div>
          <DoorOptions/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state =>{
  return {
    doorWidth: state.doorConstr.width,
    doorHeight: state.doorConstr.height,
    doorType: state.doorConstr.doorType,
    doorOptionStep: state.doorConstr.doorOptionStep
  };
};

const mapDispatchToProps = dispatch =>{
  return{
    
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(errorHandler(DoorsConstructor, axios));