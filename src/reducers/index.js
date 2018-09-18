import { combineReducers } from "redux";
import reciters from "./recitersReducer";
import surah from "./surahReducer";
import player from "./plaerReducer";

const rootReducer = combineReducers({
  reciters,
  surah,
  player
});

export default rootReducer;
