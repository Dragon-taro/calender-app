import { combineReducers } from "redux";
import calendarReducer from "./calendar/reducer";

const rootReducer = combineReducers({ calendar: calendarReducer });

export default rootReducer;
