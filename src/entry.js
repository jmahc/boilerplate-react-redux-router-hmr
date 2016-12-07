// Node Modules
import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { AppContainer } from 'react-hot-loader';

// Imported Local Files
import App from './containers/App/App';

// Local Variables
const rootEl = document.getElementById('root');

injectTapEventPlugin();
// 300ms response time fix for iOS

const renderApp = (Application) => {
  ReactDOM.render(
    <AppContainer>
      <Application />
    </AppContainer>,
    rootEl,
  );
};
// render application method for instantiation and HMR.

renderApp(App);
// instantiate the application

if (__DEVELOPMENT__ && module.hot) {
  module.hot.accept([
    './containers/App/App',
  ], () => {
    const NextApplication = require('./containers/App/App').default; // eslint-disable-line global-require
    // require path is same as module hot path

    renderApp(NextApplication);
    // re-render the updated app
  });
}
