import React, {Component} from 'react';
import classes from './DoorView.css';
import Wrap from '../../hoc/Wrap/Wrap';

class DoorView extends Component{

  render(){
    let post = <div className={classes.DoorPost}></div>;
    let beem = <div className={classes.DoorBeem}></div>;
    if(this.props.posts === 2){
      post = (
        <Wrap>
          <div className={classes.DoorPost}></div>
          <div className={classes.DoorPost}></div>
        </Wrap>
      )
    }
    if(this.props.posts === 3){
      post = (
        <Wrap>
          <div className={classes.DoorPost}></div>
          <div className={classes.DoorPost}></div>
          <div className={classes.DoorPost}></div>
        </Wrap>
      )
    }
    if(this.props.posts === 4){
      post = (
        <Wrap>
          <div className={classes.DoorPost}></div>
          <div className={classes.DoorPost}></div>
          <div className={classes.DoorPost}></div>
          <div className={classes.DoorPost}></div>
        </Wrap>
      )
    }
    if(this.props.beems === 2){
      beem = (
        <Wrap>
          <div className={classes.DoorBeem}></div>
          <div className={classes.DoorBeem}></div>
        </Wrap>
      )
    }
    if(this.props.beems === 3){
      beem = (
        <Wrap>
          <div className={classes.DoorBeem}></div>
          <div className={classes.DoorBeem}></div>
          <div className={classes.DoorBeem}></div>
        </Wrap>
      )
    }
    if(this.props.beems === 4){
      beem = (
        <Wrap>
          <div className={classes.DoorBeem}></div>
          <div className={classes.DoorBeem}></div>
          <div className={classes.DoorBeem}></div>
          <div className={classes.DoorBeem}></div>
        </Wrap>
      )
    }
    return(
      <div className={classes.DoorView}>
        <div className={classes.Door}>
          {post}
        </div>
        <div className={classes.Door2}>
          {beem}
        </div>
      </div>
    )
  };
};
  
export default DoorView;