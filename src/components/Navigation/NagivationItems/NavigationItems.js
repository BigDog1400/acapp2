import React from 'react';
import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const NavigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link='/' exact>Workout</NavigationItem>
        <NavigationItem link='/history'>History</NavigationItem> 
    </ul>
);

export default NavigationItems;
