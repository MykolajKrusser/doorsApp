import React from 'react';
import Button from '../UI/Button/Button';
import classes from './Tools.css';

const tools = (props)=>(
  <div className={classes.ToolsItems}>
    <div>
      Select language:
    </div>
    <select>
      <option value="English">English</option>
      <option value="Polish">Polish</option>
    </select>
    <button className={classes.ButtonInfo} onClick={props.click}>
      My organization
      <div className={classes.TooltipContent}>
        <div className={classes.TooltipArrow}></div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore blanditiis, placeat minus</p>
      </div>
    </button>
    
  </div>
);

export default tools;