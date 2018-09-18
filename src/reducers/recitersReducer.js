import * as types from "../constants/actionTypes";

const recitersReducer = (state = [], action) => {
  switch (action.type) {
    case types.GET_RECITERS:
      return action.payload;
    default:
      return state;
  }
};

export default recitersReducer;
