import * as types from "../constants/actionTypes";

export const getReciters = reciters => {
  return {
    type: types.GET_RECITERS,
    payload: reciters
  };
};
