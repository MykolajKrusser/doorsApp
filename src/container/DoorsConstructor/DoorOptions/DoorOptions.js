import React, {Component} from 'react';
import {connect} from 'react-redux';
import errorHandler from '../../../hoc/withErrorHandler/withErrorHandler';
import axios from 'axios';
import classes from './DoorOptions.css';

import * as action from '../../../store/actions/actionTypes';
import * as actions from '../../../store/actions/index';

import Button from '../../../components/UI/Button/Button';

export class DoorOptions extends Component{

  render(){
    return(
      <div className={classes.DoorOptions}>
        <h2>Door type</h2>
        <hr/>
        <div className={classes.DoorOptions}>
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
        <div className={classes.DoorOptions}>
          <div>
            <label htmlFor="contactChoice1">Width</label>
            <input type="number" value='120'/>
          </div>
          <div>
            <label htmlFor="contactChoice1">Height</label>
            <input type="number" value='250'/>
          </div>
        </div>
        <Button>Next step</Button>
      </div>
    );
  }
}

const mapStateToProps = state =>{
  return {
    
  };
};

const mapDispatchToProps = dispatch =>{
  return{
    
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(errorHandler(DoorOptions, axios));