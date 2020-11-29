import React, { Component, Fragment } from 'react';
import Classes from './Layout.module.css'
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state= {
        showSideDrawer : false
    }
    sideDrawerClosedHandler = ()=>{
        this.setState({showSideDrawer: false})
    }
    sideDrawerToggleHandler = ()=>{
        this.setState((prevState)=>{
            return { showSideDrawer : !prevState.showSideDrawer}
        });
    }
    render() {
        return (
          <Fragment>
              <Toolbar
                drawerToggleClicked={this.sideDrawerToggleHandler}
              ></Toolbar>
              <SideDrawer
                open={this.state.showSideDrawer}
                closed={this.sideDrawerClosedHandler}
              ></SideDrawer>
              <main className={Classes.Content}>{this.props.children}</main>
          </Fragment>
        );
    }
}

export default Layout;
