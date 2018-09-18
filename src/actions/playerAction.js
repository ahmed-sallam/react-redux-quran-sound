import * as types from "../constants/actionTypes";

export const setCurrentSource = source => {
  return {
    type: types.SET_CURRENT_SOURCE,
    payload: source
  };
};
