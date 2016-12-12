// ==== Local Files
import * as types from '../constants';

const initialState = {
  count: 0,
};

// ==== Reducer
export default function counterReducer(state = initialState, action = {}) {
  const { count } = state;

  switch (action.type) {
    case types.INCREMENT_COUNTER:
      return {
        count: count + 5,
      };
    default:
      return state;
  }
}

// ==== Action Creators
export function increment() {
  return {
    type: types.INCREMENT_COUNTER,
  };
}

export function incrementAsync() {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(increment());
    }, 1000);
  };
}
