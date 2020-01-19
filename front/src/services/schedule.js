import { isSameDay } from "./calendar";

export const setSchedules = (calendar, schedules) =>
  calendar.map(c => ({
    date: c,
    schedules: schedules.filter(e => isSameDay(e.date, c))
  }));

export const formatSchedule = schedule => ({
  ...schedule,
  date: dayjs(schedule.date)
});

export const isCloseDialog = schedule => {
  const message = "保存されていない変更を破棄しますか？";

  return isScheduleEmpty(schedule) || window.confirm(message);
};

const isScheduleEmpty = schedule =>
  !schedule.title && !schedule.description && !schedule.location;
