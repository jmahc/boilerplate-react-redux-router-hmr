import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import * as types from '../actions/types';
import counter from '../actions/counter';

export const filter = (state = '', action) => {
  switch (action.type) {
    case types.FILTER:
      return action.filter;
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  filter,
  counter,
  routing,
});

// Look at counter and index in reducers folder --- they are very similar?
