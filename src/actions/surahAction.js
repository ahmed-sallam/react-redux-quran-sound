import * as types from "../constants/actionTypes";

export const getSurah = surah => {
  return {
    type: types.GET_SURAH,
    payload: surah
  };
};
