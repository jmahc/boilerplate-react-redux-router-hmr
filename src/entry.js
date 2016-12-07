// Node Modules
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { AppContainer } from 'react-hot-loader';

// Redux-Related
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

// Imported Local Files
import configureStore from './store/configureStore';
import Root from './containers/Root/Root';

// Development Only
// import hotReloadRoutes from './util/hotReloadRoutes';

// Local Variables
const rootEl = document.getElementById('root');
const store = configureStore();

injectTapEventPlugin();
// 300ms response time fix for iOS

const renderApp = (RootComponent) => {
  ReactDOM.render(
    <AppContainer>
      <RootComponent store={store} history={syncHistoryWithStore(browserHistory, store)} />
    </AppContainer>,
    rootEl,
  );
};
// render application method for instantiation and HMR.

renderApp(Root);

if (__DEVELOPMENT__ && module.hot) {
  module.hot.accept([
    './containers/Root/Root',
  ], () => {
    const NextRoot = require('./containers/Root/Root').default; // eslint-disable-line global-require
    // require path is same as module hot path

    renderApp(NextRoot);
    // re-render the updated app
  });
}
