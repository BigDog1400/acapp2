import React, {Fragment} from 'react';
import NavigationItems from '../NagivationItems/NavigationItems';
import classes from './SideDrawer.module.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
const SideDrawer = (props) => {
    let attachedClasses = [classes.SideDrawer, classes.Close];
    if (props.open) {
         attachedClasses = [classes.SideDrawer, classes.Open];
    }
    return (
        <Fragment>
        <Backdrop show={props.open} clicked={props.closed}/>
        <div className={attachedClasses.join(' ')}  onClick={props.closed}>   
            <div className={classes.Logo}>
             {/* <Logo></Logo> */}
            </div>
            <nav>
                <NavigationItems
                ></NavigationItems>
            </nav>
        </div>
        </Fragment>
    );
}

export default SideDrawer;
