import { combineReducers } from 'redux';
import calendarReducer from './calendar/reducer';

// バラバラのreducerを1つにまとめる
const rootReducer = combineReducers({ calendar: calendarReducer })

export default rootReducer;
