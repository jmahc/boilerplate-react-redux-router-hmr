// ==== Node Modules
import { applyMiddleware, compose } from 'redux';
import { persistState } from 'redux-devtools';
import thunk from 'redux-thunk';

// ==== Local Files
import DevTools from '../containers/DevTools/DevTools';

let determineEnhancer;
if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
  determineEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(
    // ==== Compose method applied to `redux-devtools-extension` as of 2.7.1

    applyMiddleware(thunk),
  );
} else {
  determineEnhancer = compose(
    applyMiddleware(thunk),
    DevTools.instrument(),
    persistState(
      window.location.href.match(
        /[?&]debug_session=([^&#]+)\b/,
      ),
    ),
  );
}

const enhancer = determineEnhancer;
// ==== Prevents mutability.

export default enhancer;
