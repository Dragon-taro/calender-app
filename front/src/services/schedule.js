import { isSameDay } from "./calendar";

export const setSchedules = (calendar, schedules) =>
  calendar.map((c) => ({
    date: c,
    schedules: schedules.filter((e) => isSameDay(e.date, c)),
  }));
