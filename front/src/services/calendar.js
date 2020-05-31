import dayjs from "dayjs";

export const createCalendar = () => {
  const firstDay = dayjs().startOf("month");
  const firstDayIndex = firstDay.day();
  return Array(36)
    .fill(0)
    .map((_, i) => {
      const diffFromFirstDay = i - firstDayIndex;
      const day = firstDay.add(diffFromFirstDay, "day");

      return day;
    });
};

/**
 * d1とd2の日付が等しいか判定する
 * @param {*} d1
 * @param {*} d2
 */
export const isSameDay = (d1, d2) => {
  const format = "YYYYMMDD";
  return d1.format(format) === d2.format(format);
};

/**
 * m1とm2の月が等しいか判定する
 * @param {*} m1
 * @param {*} m2
 */
export const isSameMonth = (m1, m2) => {
  const format = "YYYYMM";
  return m1.format(format) === m2.format(format);
};

export const isFirstDay = (day) => day.date() === 1;
