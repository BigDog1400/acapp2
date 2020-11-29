import React from 'react';
import classes from './Toolbar.module.css';
import NavigationItems from '../NagivationItems/NavigationItems';
import DrawerToggler from '../SideDrawer/DrawerToggler/DrawerToggler';
const Toolbar = (props) => (
    <header className={classes.Toolbar}>
       <DrawerToggler clicked={props.drawerToggleClicked}></DrawerToggler>
        <nav className={classes.DesktopOnly}> 
            <NavigationItems></NavigationItems>
        </nav>
    </header>
)

export default Toolbar;
