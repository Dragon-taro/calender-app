import { combineReducers } from "redux";
import { count } from "./count/reducer";

const rootReducer = combineReducers({ count });

export default rootReducer;
