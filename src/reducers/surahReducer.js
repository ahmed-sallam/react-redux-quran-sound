import * as types from "../constants/actionTypes";

const surahReducer = (state = [], action) => {
  switch (action.type) {
    case types.GET_SURAH:
      return action.payload;
    default:
      return state;
  }
};

export default surahReducer;
