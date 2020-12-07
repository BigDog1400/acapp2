import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout'
import {Route, withRouter} from 'react-router-dom';
import Auth from './components/Auth/Auth';
class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Route path='/auth' component={Auth}></Route>
        </Layout>
      </div>
    );
  }
}

export default withRouter(App);
