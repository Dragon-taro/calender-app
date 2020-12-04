import { isSameDay } from "./calendar";

// Dayjsの配列と予定の配列を受け取ってスケジュールのデータ構造の配列を返す関数
// calendarをmapしてdateにセットしつつ、schedulesと言う項目に引数として受け取ったschedulesのうち
// mapされたそれぞれのcalendarの日付に一致するものだけをfilterとしてセット
export const setSchedules = (calendar, schedules) =>
  calendar.map(c => ({
    date: c,
    schedules: schedules.filter(e => isSameDay(e.date, c))
  }));
