import dayjs from "dayjs";

import { CALENDAR_SET_MONTH } from "./actions";

import { formatMonth } from "../../services/calendar";

const day = dayjs();

const init = formatMonth(day);
// const init = {
//   year: day.year(),
//   month: day.month() + 1,
// };

const calendarReducer = (state = init, action) => {
  const { type, payload } = action;
  switch (type) {
    case CALENDAR_SET_MONTH:
      return payload;
    default:
      return state;
  }
};

export default calendarReducer;