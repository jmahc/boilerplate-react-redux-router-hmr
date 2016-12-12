import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import { counterReducer as counter } from '../actions';

const rootReducer = combineReducers({
  counter,
  routing,
});

export default rootReducer;
