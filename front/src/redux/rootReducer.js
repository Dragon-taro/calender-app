import { combineReducers} from "redux"
import  addScheduleReducer  from "./addSchedule/reducer";
import calendarReducer from "./calendar/reducer";
import currentScheduleReducer from "./currentSchedule/reducer";
import schedulesReducer from "./schedules/reducer";

const rootReducer = combineReducers({
  calendar: calendarReducer,
  addSchedule: addScheduleReducer,
  currentSchedule:currentScheduleReducer,
  schedules: schedulesReducer
})

export default rootReducer