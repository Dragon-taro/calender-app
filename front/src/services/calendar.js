import dayjs from 'dayjs';

export const createCalendar = (yearMonth, a) => {
  // 今月の最初の日
  const firstDay = getFirstDayOfMonth(yearMonth);

  // .day() => 日曜始まりのカレンダー上でその日のindexを取得
  const firstDayIndex = firstDay.day(); // 4 (2021/4/1の場合)

  return Array(35).fill(0).map((_, i) => {
    const diffFromFirstDay = i - firstDayIndex;

    return firstDay.add(diffFromFirstDay, 'day');
  })
};

export const getFirstDayOfMonth = ({ year, month }) => {
  return dayjs(`${year}-${month}`);
}

export const getMonth = ({ year, month }) => {
  return dayjs(`${year}-${month}`);
}

export const isSameDay = (dayOne, dayTwo) => {
  const format = 'YYYYMMDD';
  return dayOne.format(format) === dayTwo.format(format);
}

export const isSameYearMonth = (dayOne, dayTwo) => {
  const format = 'YYYYMM';
  return dayOne.format(format) === dayTwo.format(format);
}

export const isFirstDay = (day) => {
  return day.date() === 1;
}

export const getNextMonth = (yearMonth) => {
  const day = getMonth(yearMonth).add(1, 'month');
  return formatMonth(day);
}

export const getPreviousMonth = (yearMonth) => {
  const day = getMonth(yearMonth).add(-1, 'month');
  return formatMonth(day);
}

export const formatMonth = (day) => ({
  // day.month() => その月のindex。3月なら2になる
  month: day.month() + 1,
  year: day.year()
});
