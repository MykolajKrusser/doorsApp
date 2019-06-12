import React, {Component} from 'react';
import {connect} from 'react-redux';
import errorHandler from '../../../hoc/withErrorHandler/withErrorHandler';
import axios from 'axios';
import classes from './DoorOptions.css';

import * as action from '../../../store/actions/actionTypes';


import Button from '../../../components/UI/Button/Button';

export class DoorOptions extends Component{

  render(){
    return(
      <div className={classes.DoorOptions}>
        <div className={classes.Common}>
          <h2>Door type</h2>
          <hr/>
          <div className={classes.Common}>
            <div>
              <input id='id1' type="radio" checked={this.props.doorType === "Single door"} value="Single door" onChange={this.props.onDoorTypeHandler}/>
              <label htmlFor="id1">Single door</label>
            </div>
            <div>
              <input id='id2' type="radio" checked={this.props.doorType === "Double door"} value="Double door" onChange={this.props.onDoorTypeHandler}/>
              <label htmlFor="id2">Double door</label>
            </div>
          </div>
          <h2>Door size</h2>
          <hr/>
          <div className={classes.CommonSize}>
            <div>
              <label htmlFor="id3">Width:   </label>
              <input id="id3" type="number" max='160' value={this.props.doorWidth} onChange={this.props.onDoorWidthHandler}/>
            </div>
            <div>
              <label htmlFor="id4">Height:</label>
              <input id="id4" type="number" max='300' value={this.props.doorHeight} onChange={this.props.onDoorHeightHandler}/>
            </div>
          </div>
        </div>
        <div className={classes.DoorOptionsButtons}>
          {this.props.doorOptionStep > 1 ? <Button click={this.props.onDoorStepBack}>Back</Button> : null}
          <Button click={this.props.onDoorStepNext}>Next step</Button>
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
    onDoorWidthHandler: (event)=> dispatch({type: action.DOOR_WIDTH, event: event}),
    onDoorHeightHandler: (event)=> dispatch({type: action.DOOR_HEIGHT, event: event}),
    onDoorTypeHandler: (event)=> dispatch({type: action.DOOR_TYPE, event: event}),
    onDoorStepNext: (event)=> dispatch({type: action.DOOR_STEP_NEXT, event: event}),
    onDoorStepBack: (event)=> dispatch({type: action.DOOR_STEP_BACK, event: event})
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(errorHandler(DoorOptions, axios));