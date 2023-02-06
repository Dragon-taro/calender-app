import {combineReducers} from "redux"
import  addScheduleReducer  from "./addSchedule/reducer";
import calendarReducer from "./calendar/reducer";

const rootReducer = combineReducers({
  calendar: calendarReducer,
  addSchedule: addScheduleReducer
})

export default rootReducer