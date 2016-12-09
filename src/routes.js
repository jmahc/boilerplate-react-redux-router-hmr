// ==== Node Modules
import React from 'react';
import { IndexRoute, Route } from 'react-router';
// ==== Local Files
import { About, Home, Layout } from 'containers';

const routes = (
  <Route path="/" component={Layout}>
    <IndexRoute path="" component={Home} />
    <Route path="/about" component={About} />
  </Route>
);
// ==== Routes must be exported in order for HMR to work.

export default routes;
