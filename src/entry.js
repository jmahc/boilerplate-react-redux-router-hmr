// ==== Node Modules
import 'normalize.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { syncHistoryWithStore } from 'react-router-redux';
import { hashHistory } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
// ==== Local Files
import Root from './containers/Root/Root';
import configureStore from './store/configureStore';
//
// ==== Local Variables
//
const initialState = {};
const store = configureStore(initialState);
const history = syncHistoryWithStore(hashHistory, store);
const rootEl = document.getElementById('root');


// ==== Needed for onTouchTap
//      Note: This should only be instantiated once!
//      Reference: https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();


ReactDOM.render(<Root store={store} history={history} />, rootEl);
// ==== Render the application.
//      Note:   If you notice, the instantiated `Root` is NOT
//              surrounded by AppContainer from `react-hot-loader`.
//      Note 2: It will be required when doing the module reloading as seen below.

if (__DEVELOPMENT__ && module.hot) {
  module.hot.accept([
    './containers/Root/Root', // Same path as imported above
  ], () => {
    ReactDOM.render(
      <AppContainer>
        <Root store={store} history={history} />
      </AppContainer>,
      rootEl,
    );
  });
}
