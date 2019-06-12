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
              <input type="radio" value="Single door"/>
              <label htmlFor="contactChoice1">Single door</label>
            </div>
            <div>
              <input type="radio" value="Double door"/>
              <label htmlFor="contactChoice1">Double door</label>
            </div>
          </div>
          <h2>Door size</h2>
          <hr/>
          <div className={classes.CommonSize}>
            <div>
              <label htmlFor="contactChoice1">Width:</label>
              <input type="number" value={this.props.doorWidth} onChange={this.props.onDoorWidthHandler}/>
            </div>
            <div>
              <label htmlFor="contactChoice1">Height:</label>
              <input type="number" value={this.props.doorHeight} onChange={this.props.onDoorHeightHandler}/>
            </div>
          </div>
        </div>
        <Button>Next step</Button>
      </div>
    );
  }
}

const mapStateToProps = state =>{
  return {
    doorWidth: state.doorConstr.width,
    doorHeight: state.doorConstr.height
  };
};

const mapDispatchToProps = dispatch =>{
  return{
    onDoorWidthHandler: (event)=> dispatch({type: action.DOOR_WIDTH, event: event}),
    onDoorHeightHandler: (event)=> dispatch({type: action.DOOR_HEIGHT, event: event})
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(errorHandler(DoorOptions, axios));