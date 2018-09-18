import * as types from "../constants/actionTypes";

const playerReducer = (state = {}, action) => {
  switch (action.type) {
    case types.SET_CURRENT_SOURCE:
      return action.payload;
    default:
      return state;
  }
};

export default playerReducer;
