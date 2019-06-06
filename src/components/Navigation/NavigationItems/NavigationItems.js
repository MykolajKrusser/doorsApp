import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.css'

const navigationItems = (props)=>(
  <ul className={classes.NavigationItems}>
    <div>
      Select language:
    </div>
    <select>
      <option value="English">English</option>
      <option value="Polish">Polish</option>
    </select>
  </ul>
);

export default navigationItems;