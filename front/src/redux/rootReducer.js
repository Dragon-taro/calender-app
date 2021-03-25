import { combineReducers } from 'redux';
import calendarReducer from './calendar/reducer';

// バラバラのreducerを1つにまとめる
// { calendar: { year: 2021, month: 3 } } = store.getState()
const rootReducer = combineReducers({ calendar: calendarReducer })

export default rootReducer;
