import { isSameDay } from './calendar';

/* 下記条件の時に {}とreturnを省略できる(参照: https://hoshinotsuyoshi.com/post/arrow_func_no_brace/)
  1. 関数内の式が一文
  2. 1の一文が戻り値となる
    ※戻り値がオブジェクトの場合、()で囲う必要あり
    例) export const a = () => ({ name: 'pokotan' })
*/
export const setSchedules = (calendar, schedules) =>
  calendar.map(c => ({
    date: c,
    schedules: schedules.filter(e => isSameDay(e.date, c))
  }));
// export const setSchedules = (arguments) => { return calendar.map... }と同じ

