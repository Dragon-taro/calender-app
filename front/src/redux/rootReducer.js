import { combineReducers } from "redux";
import calendarReducer from "./calendar/reducer";
import addScheduleReducer from "./addSchedule/reducer";

const rootReducer = combineReducers({
  calendar: calendarReducer,
  addSchedule: addScheduleReducer
});

export default rootReducer;
