import React from 'react';
import classes from './Logo.css';

import img from '../../../assets/img/logo.png';

const logo = (props)=>(
  <img src={img} alt="ReactTask" className={classes.Logo}/>
);
export default logo;