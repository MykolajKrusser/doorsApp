import React from 'react';
import Button from '../UI/Button/Button';
import classes from './Tools.css';

const tools = (props)=>(
  <div className={classes.ToolsItems}>
    <div>
      Select language:
    </div>
    <div id="google_translate_element"></div>
    {props.isAuth ? <button className={classes.ButtonInfo} onClick={props.click}>
        My organization
        <div className={classes.TooltipContent}>
          <div className={classes.TooltipArrow}></div>
          <p>organization name : {props.organization.name}</p>
          <p>email : {props.organization.email}</p>
          <p>phone number : {props.organization.phone_number}</p>
          <p>adress line 1 : {props.organization.address_line_1}</p>
          <p>adress line 2 : {props.organization.address_line_2}</p>
          <p>city : {props.organization.city}</p>
          <p>postal code : {props.organization.postal_code}</p>
        </div>
      </button> : null
    }
     
  </div>
);

export default tools;