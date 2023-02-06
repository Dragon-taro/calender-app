import { combineReducers} from "redux"
import  addScheduleReducer  from "./addSchedule/reducer";
import calendarReducer from "./calendar/reducer";
import schedulesReducer from "./schedules/reducer";

const rootReducer = combineReducers({
  calendar: calendarReducer,
  addSchedule: addScheduleReducer,
  schedules: schedulesReducer
})

export default rootReducer