import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.css'

const navigationItems = (props)=>(
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" exact>1</NavigationItem>
        {props.isAuthenticated
            ? <NavigationItem link="/" >2</NavigationItem>
            : null}
        {!props.isAuthenticated
            ? <NavigationItem link="/auth">Login</NavigationItem> 
            : <NavigationItem link="/logout">Logout</NavigationItem>}
    </ul>
);

export default navigationItems;