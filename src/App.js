import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout'
import {Route, Switch, withRouter, Redirect} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
        </Layout>
      </div>
    );
  }
}

export default withRouter(App);
