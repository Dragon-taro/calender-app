import { combineReducers } from 'redux';
import calendarReducer from './calendar/reducer';
import addScheduleReducer from './addSchedule/reducer';

// バラバラのreducerを1つにまとめる
// { calendar: { year: 2021, month: 3 } } = store.getState()
const rootReducer = combineReducers({
  calendar: calendarReducer,
  addSchedule: addScheduleReducer
});

export default rootReducer;
