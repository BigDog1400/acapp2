import React, { Component } from "react";
import Layout from "./hoc/Layout/Layout";
import { Redirect, Route, withRouter } from "react-router-dom";
// import Auth from "./containers/Auth/Auth";
import Workout from "./containers/Workout/Workout";
class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Redirect from='/' to='/workout' />
          {/* <Route path='/auth' component={Auth}></Route> */}
          <Route path='/workout' component={Workout}></Route>
        </Layout>
      </div>
    );
  }
}

export default withRouter(App);
