import React from 'react';
import classes from './ToolBar.css';
import NavigationItems from '../NavigationItems/NavigationItems';
import Logo from '../../UI/Logo/Logo';

const toolbar = (props)=>(
  <header className={classes.ToolBar}>
    <Logo/>
    <nav className={classes.DeskTopOnly}>
      <NavigationItems
        isAuthenticated={props.isAuth}
      />
    </nav>
  </header>
);
export default toolbar;