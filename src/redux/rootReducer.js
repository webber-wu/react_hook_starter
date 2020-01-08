import { combineReducers } from "redux";
import root from "./reducer/rootReducer";
import ui from "./reducer/uiReducer";

export default combineReducers({
  root,
  ui
});
