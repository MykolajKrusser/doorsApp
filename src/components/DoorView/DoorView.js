import React from 'react';
import classes from './DoorView.css';

const doorView = (props)=>(
  <div className={classes.DoorView}>
    <div className={classes.Door}>
      <div className={classes.DoorPost}></div>
      <div className={classes.DoorPost}></div>
    </div>
    <div className={classes.Door2}>
      <div className={classes.DoorBeem}></div>
      <div className={classes.DoorBeem}></div>
      <div className={classes.DoorBeem}></div>
      <div className={classes.DoorBeem}></div>
    </div>
  </div>
);

export default doorView;