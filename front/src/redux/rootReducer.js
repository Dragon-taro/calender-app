import { combineReducers } from "redux";
import calendarReducer from "./calendar/reducer";
import addScheduleReducer from "./addSchedule/reducer";
import schedulesReducer from "./schedules/reducer";
import currentScheduleReducer from "./currentSchedule/reducer";

const rootReducer = combineReducers({
  calendar: calendarReducer,
  addSchedule: addScheduleReducer,
  currentSchedule: currentScheduleReducer,
  schedules: schedulesReducer,
});
export default rootReducer;
