// ==== Local Files
import * as types from './types';

// eslint-disable-next-line import/prefer-default-export
export function filterTable(filter) {
  return {
    type: types.FILTER,
    filter,
  };
}
