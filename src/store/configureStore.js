import { createStore } from 'redux';
import { DevTools } from 'containers';
import rootReducer from '../reducers';

export default function configureStore(initialState) {
  const store = createStore(
      rootReducer,
      initialState,
      DevTools.instrument(),
  );

  return store;
}
