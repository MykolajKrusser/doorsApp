import React from 'react';
import classes from './ToolBar.css';
import NavigationItems from '../NavigationItems/NavigationItems';

const toolbar = (props)=>(
  <header className={classes.ToolBar}>
    <nav className={classes.DeskTopOnly}>
      <NavigationItems
        isAuthenticated={props.isAuth}
      />
    </nav>
  </header>
);
export default toolbar;