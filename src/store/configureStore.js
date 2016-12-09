// ==== Node Modules
import { applyMiddleware, compose, createStore } from 'redux';
import { persistState } from 'redux-devtools';
import thunk from 'redux-thunk';

// ==== Local Files
import { rootReducer } from '../reducers';
import DevTools from '../containers/DevTools/DevTools';

// ==== Redux Store Enhancers
//
let enhancer;
if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
  enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(
    applyMiddleware(thunk),
  );
} else {
  enhancer = compose(
    applyMiddleware(thunk),
    DevTools.instrument(),
    persistState(
      window.location.href.match(
        /[?&]debug_session=([^&#]+)\b/,
      ),
    ),
  );
}

const configureStore = (initialState) => {
  const store = createStore(
      rootReducer,
      initialState,
      enhancer,
  );
  // Creating your Redux store

  if (__DEVELOPMENT__ && module.hot) {
    module.hot.accept('../reducers', () => {
      store.replaceReducer(rootReducer);
    });
    // Enable HMR for reducers.
  }

  return store;
};

export default configureStore;
