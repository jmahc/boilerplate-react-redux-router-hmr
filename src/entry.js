//
// Node modules
//
import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
//
// Named imports
import { AppContainer } from 'react-hot-loader';
import { hashHistory } from 'react-router';
//
// Local files
//
import Root from './containers/Root/Root';
// import routes from './routes';
// Development only
import hotReloadRoutes from './util/hotReloadRoutes';

const rootEl = document.getElementById('root');

injectTapEventPlugin();

// ReactDOM.render(
//   <AppContainer>
//     <Root history={hashHistory} routes={routes} />
//   </AppContainer>,
//   documentRoot
// );

// const renderApp = (RootComponent) => {
//   render(
//     RootComponent,
//     rootEl
//   );
// };


const renderApp = (RootComponent) => {
  ReactDOM.render(
    // history={hashHistory} --
    // routes={routes} --
  // /> --
    <AppContainer>
      <RootComponent />
    </AppContainer>,
    rootEl
  );
};

renderApp(Root);

if (__DEVELOPMENT__ && module.hot) {
  module.hot.accept([
    // './entry', --
    //
    //
    // voided blank check
    // staple deposit application with blank check
    //
    // - Alabama as state where you live formally
    // - Fill out the blank form (same info -> fix Alabama)
    //
    // './containers/App/App',
    './containers/Root/Root',
    // './containers', --
    // './routes', --
  ], () => {
    const NextRoot = require('./containers/Root/Root').default; // eslint-disable-line global-require
    // const nextRoutes = require('./routes').default; // eslint-disable-line global-require
    renderApp(NextRoot);
    // hotReloadRoutes(routes, nextRoutes);
    // Patches the existing routes object with hot-reloaded components

    // ReactDOM.render(
    //   // history={hashHistory} --
    //   // routes={routes} --
    //   <AppContainer>
    //     <NextRoot />
    //   </AppContainer>,
    //   rootEl
    // );
    // Re-renders the Root component via the react-hot-loader container, `AppContainer`
  });
}
