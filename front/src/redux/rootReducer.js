// 全てを一つにまとめたreducer
// 複数のreducerをまとめてstoreに登録する仕組みがcombineReducers()であり、ここではrootReducerと呼ぶ

import { combineReducers } from "redux";
import calendarReducer from "./calendar/reducer";

import addScheduleReducer from "./addSchedule/reducer";

// conbineReducersの引数は{[state名]:[reducer]}と言う感じで
const rootReducer = combineReducers({
  calendar: calendarReducer,
  addSchedule: addScheduleReducer
});

export default rootReducer;
