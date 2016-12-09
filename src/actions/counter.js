import { INCREMENT_COUNTER } from '../constants';

const initialState = {
  count: 0,
};

// Reducer
export default function reducer(state = initialState, action = {}) {
  const { count } = state;

  switch (action.type) {
    case INCREMENT_COUNTER:
      return {
        count: count + 5,
      };
    default:
      return state;
  }
}

// Action Creators
export function increment() {
  return {
    type: INCREMENT_COUNTER,
  };
}

export function incrementAsync() {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(increment());
    }, 1000);
  };
}
