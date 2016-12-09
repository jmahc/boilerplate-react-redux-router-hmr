import { createStore } from 'redux';
import { DevTools } from 'containers';
import rootReducer from '../reducers';

export default function configureStore(initialState) {
  const store = createStore(
      rootReducer,
      initialState,
      DevTools.instrument(),
  );

  if (__DEVELOPMENT__ && module.hot) {
    // Enable Webpack 2's HMR for reducers.
    module.hot.accept('../reducers', () => {
      store.replaceReducer(rootReducer);
    });
  }

  return store;
}
