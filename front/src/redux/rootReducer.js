import { combineReducers } from 'redux';
import calendarReducer from './calendar/reducer';
import addScheduleReducer from './addSchedule/reducer';
import schedulesReducer from './schedules/reducer';
import currentScheduleReducer from './currentSchedule/reducer';

// バラバラのreducerを1つにまとめる
// { calendar: { year: 2021, month: 3 } } = store.getState()
const rootReducer = combineReducers({
  calendar: calendarReducer,
  addSchedule: addScheduleReducer,
  schedules: schedulesReducer,
  currentSchedule: currentScheduleReducer
});

export default rootReducer;
