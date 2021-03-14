import dayjs from 'dayjs';
import { CALENDAR_SET_MONTH } from './actions';

const day = dayjs();

const init = {
  year: day.year(),
  // day.month() => その月のindex。3月なら2になる
  month: day.month() + 1
};

const calendarReducer = (state = init, action) => {
  // { type: 'CALENDAR_SET_MONTH', paylod: ... }。変数名に同じkey名を使用する
  // type = 'CALENDAR_SET_MONTH'
  const { type, payload } = action;
  switch(type) {
    case CALENDAR_SET_MONTH:
      return payload;
    default:
      return state;
  }
};

export default calendarReducer;
