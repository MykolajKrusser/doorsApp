import React from 'react';
import classes from './StepView.css';

const stepView = (props)=>(
  <div className={classes.StepView}>
    <div className={classes.Step}>
      <div className={classes.StepDotActive}>
        <div className={classes.StepDotInsideActive}></div>
      </div>
      <p>Step 1</p>
      <p>Choose door</p>
    </div>
    <div className={classes.StepLineDecor}></div>
    <div className={classes.Step}>
      <div className={classes.StepDot}>
        <div className={classes.StepDotInside}></div>
      </div>
      <p>Step 2</p>
      <p>Choose door division</p>
    </div>
    <div className={classes.StepLineDecor}></div>
    <div className={classes.Step}>
      <div className={classes.StepDot}>
        <div className={classes.StepDotInside}></div>
      </div>
      <p>Step 1</p>
      <p>Choose color</p>
    </div>
  </div>
);

export default stepView;