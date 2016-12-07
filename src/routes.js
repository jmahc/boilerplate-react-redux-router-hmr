// Node Modules
import React from 'react';
import { IndexRoute, Route } from 'react-router';

// Imported Local Files
import { App, Home, About } from 'containers';

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Home} path="" />
    <Route component={About} path="/about" />
  </Route>
);
// routes must be exported in order for HMR to work.

export default routes;
