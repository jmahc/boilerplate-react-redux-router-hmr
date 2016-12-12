import * as types from '../constants';

const counter = (state = 0, action) => {
  switch (action.type) {
    case types.INCREMENT_COUNTER:
      return state + 1;
    default:
      return state;
  }
};

export default counter;
