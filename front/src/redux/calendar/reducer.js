import dayjs from 'dayjs';
import { CALENDAR_SET_MONTH } from './actions';
import { formatMonth } from '../../services/calendar';

const day = dayjs();

const init = formatMonth(day); // { month: 3, year: 2021 }。これが初期データになる

// reducerの第一引数がstoreのデータになると考えてよい?
const calendarReducer = (state = init, action) => {
  // { type: 'CALENDAR_SET_MONTH', payload: ... }。変数名に同じkey名を使用する
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
