import React from 'react';
import { IndexRoute, Route } from 'react-router';
// import App from './containers/App/App';
import { App, Home } from 'containers';

// const routes = [
//   {
//     pattern: '/',
//     component: App,
//   },
// ];

const routes = (
  <Route
    component={App}
    path="/"
  >
    <IndexRoute
      component={Home}
      path="" // necessary
    />
  </Route>
);

export default routes;
