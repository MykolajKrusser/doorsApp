import React, {Component} from 'react';
import {connect} from 'react-redux';
import classes from './DoorsConstructor.css';
import Wrap from '../../hoc/Wrap/Wrap';

import StepView from '../../components/StepView/StepView';
import DoorView from '../../components/DoorView/DoorView';
import DoorOptions from './DoorOptions/DoorOptions';

export class DoorsConstructor extends Component{

  render(){
     let doors = <DoorView color={this.props.doorColor} beems={this.props.doorBeems} posts={this.props.doorPosts}/>
     
     if(this.props.doorType === "Double door"){
        doors = (
          <Wrap>
            <DoorView color={this.props.doorColor} beems={this.props.doorBeems} posts={this.props.doorPosts}/>
            <DoorView color={this.props.doorColor} beems={this.props.doorBeems} posts={this.props.doorPosts}/>
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
            <div className={classes.SizeView} style={{transform: 'translate(-115px, 55px)'}}>{this.props.doorWidth}</div>
            <div className={classes.SizeView} style={{transform: 'translate(-205px, 450px)'}}>{this.props.doorWidth}</div>
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
    doorOptionStep: state.doorConstr.doorOptionStep,
    doorBeems: state.doorConstr.doorBeems,
    doorPosts: state.doorConstr.doorPosts,
    doorColor: state.doorConstr.color
  };
};

export default connect(mapStateToProps)(DoorsConstructor);