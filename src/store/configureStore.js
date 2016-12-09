// ==== Node Modules
import { createStore } from 'redux';

// ==== Local Files
import { rootReducer } from '../reducers';
import enhancer from './storeEnhancer';


const configureStore = (initialState) => {
  const store = createStore(
      rootReducer,
      initialState, // Typically defaulted to empty object
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
