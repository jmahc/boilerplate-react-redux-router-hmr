// ==== Node Modules
//
import 'normalize.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { syncHistoryWithStore } from 'react-router-redux';
import { hashHistory } from 'react-router';
import { applyMiddleware, compose, createStore } from 'redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import thunk from 'redux-thunk';
import { persistState } from 'redux-devtools';

// ==== Local Files
//
import { rootReducer } from './reducers';
import Root from './containers/Root/Root'; // Used for HMR
import DevTools from './containers/DevTools/DevTools';

// ==== Redux Store
//
const enhancer = compose(
  applyMiddleware(thunk),
  DevTools.instrument(),
  persistState(
    window.location.href.match(
      /[?&]debug_session=([^&#]+)\b/,
    ),
  ),
);

const configureStore = (initialState) => {
  const store = createStore(
      rootReducer,
      initialState,
      enhancer,
  );
  // Creating your Redux store

  if (__DEVELOPMENT__ && module.hot) {
    module.hot.accept('./reducers', () => {
      store.replaceReducer(rootReducer);
    });
    // Enable HMR for reducers.
  }

  return store;
};

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
//      Note: This is NOT surrounded by AppContainer
//            It will be when the module hot-reloads.

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
