// ここではactionが実行された時にどのような状態になるのかを定義する

import dayjs from "dayjs";

import { CALENDAR_SET_MONTH } from "./actions";

const day = dayjs();

// 初期値の設定
// 月の情報は0~11で返されるので１プラスする
const init = {
  year: day.year(),
  month: day.month() +1
}


const calendarReducer = (state = init, action) => {
  const { type, payload } = action;
  switch (type) {
    case CALENDAR_SET_MONTH:
      return payload;
    default:
      return state;
  }
}

export default calendarReducer;
