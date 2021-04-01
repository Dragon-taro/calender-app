import { combineReducers } from 'redux';
import calendarReducer from './calendar/reducer';
import addScheduleReducer from './addSchedule/reducer';
import schedulesReducer from './schedules/reducer';

// バラバラのreducerを1つにまとめる
// { calendar: { year: 2021, month: 3 } } = store.getState()
const rootReducer = combineReducers({
  calendar: calendarReducer,
  addSchedule: addScheduleReducer,
  schedules: schedulesReducer
});

export default rootReducer;
