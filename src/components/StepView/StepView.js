import React from 'react';
import classes from './StepView.css';

const stepView = (props)=>(
  <div className={classes.StepView}>
    <div className={classes.Step}>
      <div className={props.currentStep === 1 ? classes.StepDotActive : classes.StepDot}>
        <div className={props.currentStep === 1 ? classes.StepDotInsideActive : classes.StepDotInside}></div>
      </div>
      <p>Step 1</p>
      <p>Choose door</p>
    </div>
    <div className={classes.StepLineDecor}></div>
    <div className={classes.Step}>
      <div className={props.currentStep === 2 ? classes.StepDotActive : classes.StepDot}>
        <div className={props.currentStep === 2 ? classes.StepDotInsideActive : classes.StepDotInside}></div>
      </div>
      <p>Step 2</p>
      <p>Choose door division</p>
    </div>
    <div className={classes.StepLineDecor}></div>
    <div className={classes.Step}>
      <div className={props.currentStep === 3 ? classes.StepDotActive : classes.StepDot}>
        <div className={props.currentStep === 3 ? classes.StepDotInsideActive : classes.StepDotInside}></div>
      </div>
      <p>Step 1</p>
      <p>Choose color</p>
    </div>
  </div>
);

export default stepView;