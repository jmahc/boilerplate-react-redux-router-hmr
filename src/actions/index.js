import * as types from './types';

export function filterTable(filter) { // eslint-disable-line import/prefer-default-export
  return {
    type: types.FILTER,
    filter,
  };
}
