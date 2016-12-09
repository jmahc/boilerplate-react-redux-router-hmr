// ==== Node Modules
import React, { Component } from 'react';
import { Route, IndexRoute } from 'react-router';
// ==== Local Files
import { About, Home, Layout } from 'containers';

class Routes extends Component {
  static propTypes = {};

  render() {
    return (
      <Route path='/' component={Layout}>
        <IndexRoute component={Home} />
        <Route path='/about' component={About} />
      </Route>
    );
  }
}

export default Routes;
