import React, {Component} from 'react';
import {connect} from 'react-redux';
import classes from './DoorOptions.css';

import * as action from '../../../store/actions/actionTypes';


import Button from '../../../components/UI/Button/Button';

export class DoorOptions extends Component{
  render(){
    let doorsOption = (
      <div className={classes.Common}>
        <h2>Door type</h2>
        <hr/>
        <div className={classes.Common}>
          <div>
            <input id='Singledoor' type="radio" checked={this.props.doorType === "Single door"} value="Single door" onChange={this.props.onDoorTypeHandler}/>
            <label htmlFor="Singledoor">Single door</label>
          </div>
          <div>
            <input id='Doubledoor' type="radio" checked={this.props.doorType === "Double door"} value="Double door" onChange={this.props.onDoorTypeHandler}/>
            <label htmlFor="Doubledoor">Double door</label>
          </div>
        </div>
        <h2>Door size</h2>
        <hr/>
        <div className={classes.CommonSize}>
          <div>
            <label htmlFor="Width">Width:   </label>
            <input id="Width" type="number" max='160' value={this.props.doorWidth} onChange={this.props.onDoorWidthHandler}/>
          </div>
          <div>
            <label htmlFor="Height">Height:</label>
            <input id="Height" type="number" max='300' value={this.props.doorHeight} onChange={this.props.onDoorHeightHandler}/>
          </div>
        </div>
      </div>
    );

    if(this.props.doorOptionStep === 3){
      doorsOption = (
        <div className={classes.Common}>
          <h2>Door devisions</h2>
          <hr/>
          <div className={classes.Common}>
            <div className={classes.CommonColors}>
              <input id='Black' type="radio" checked={this.props.doorColor === "Black"} value="Black" onChange={this.props.onColorHandler}/>
              <label htmlFor="Black">Black</label>
              <div className={classes.DoorColorBlack}></div>
            </div>
            <div className={classes.CommonColors}>
              <input id='Grey' type="radio" checked={this.props.doorColor === "Grey"} value="Grey" onChange={this.props.onColorHandler}/>
              <label htmlFor="Grey">Grey </label>
              <div className={classes.DoorColorGrey}></div>
            </div>
            <div className={classes.CommonColors}>
              <input id='White' type="radio" checked={this.props.doorColor === "White"} value="White" onChange={this.props.onColorHandler}/>
              <label htmlFor="White">White</label>
              <div className={classes.DoorColorWhite}></div>
            </div>
          </div>
        </div>
      );
    }

    if(this.props.doorOptionStep === 2){
      doorsOption = (
        <div className={classes.Common}>
          <h2>Door color</h2>
          <hr/>
          <div className={classes.Common}>
            <div className={classes.CommonBeemPost}>
              <label htmlFor="Numberofbeems">Number of beems:</label>
              <p>{this.props.doorBeems}</p>
              <button onClick={this.props.onBeemDoorAdd}>+</button>
              <button onClick={this.props.onBeemDoorRemove}>-</button>
            </div>
            <div className={classes.CommonBeemPost}>
              <label htmlFor="Numberofposts">Number of posts: </label>
              <p className={classes.LeftFix}>{this.props.doorPosts}</p>
              <button onClick={this.props.onPostsDoorAdd}>+</button>
              <button onClick={this.props.onPostsDoorRemove}>-</button>
            </div>
          </div>
        </div>
      );
    }
    return(
      <div className={classes.DoorOptions}>
        {doorsOption}
        <div className={classes.DoorOptionsButtons}>
          {this.props.doorOptionStep > 1 ? <Button click={this.props.onDoorStepBack}>Back</Button> : null}
          {this.props.doorOptionStep < 3 ? <Button click={this.props.onDoorStepNext}>Next step</Button> : null}
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
    doorOptionStep: state.doorConstr.doorOptionStep,
    doorBeems: state.doorConstr.doorBeems,
    doorPosts: state.doorConstr.doorPosts,
    doorColor: state.doorConstr.color
  };
};

const mapDispatchToProps = dispatch =>{
  return{
    onDoorWidthHandler: (event)=> dispatch({type: action.DOOR_WIDTH, event: event}),
    onDoorHeightHandler: (event)=> dispatch({type: action.DOOR_HEIGHT, event: event}),
    onDoorTypeHandler: (event)=> dispatch({type: action.DOOR_TYPE, event: event}),
    onDoorStepNext: ()=> dispatch({type: action.DOOR_STEP_NEXT}),
    onDoorStepBack: ()=> dispatch({type: action.DOOR_STEP_BACK}),
    onBeemDoorAdd: ()=> dispatch({type: action.DOOR_BEEM_ADD}),
    onBeemDoorRemove: ()=> dispatch({type: action.DOOR_BEEM_REMOVE}),
    onPostsDoorAdd: ()=> dispatch({type: action.DOOR_POSTS_ADD}),
    onPostsDoorRemove: ()=> dispatch({type: action.DOOR_POSTS_REMOVE}),
    onColorHandler: (event)=> dispatch({type: action.DOOR_COLOR, event: event})
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DoorOptions);