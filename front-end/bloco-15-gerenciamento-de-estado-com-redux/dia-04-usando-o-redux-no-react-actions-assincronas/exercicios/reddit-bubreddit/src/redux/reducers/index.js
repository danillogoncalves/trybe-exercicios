import { combineReducers } from "redux";
import apiRedditReducer from "./apiRedditReducer";

const rootReducer = combineReducers({
  apiRedditReducer,
});

export default rootReducer;
