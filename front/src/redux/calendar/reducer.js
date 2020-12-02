// ここではactionが実行された時にどのような状態になるのかを定義する

import dayjs from "dayjs";

import { CALENDAR_SET_MONTH } from "./actions";

import { formatMonth } from "../../service/calendar";

const day = dayjs();

// 初期値の設定
// 月の情報は0~11で返されるので１プラスする
const init = formatMonth(day);


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
