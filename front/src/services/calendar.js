import dayjs from 'dayjs';

export const createCalendar = (yearMonth) => {
  // 今月の最初の日
  const firstDay = getMonth(yearMonth);

  // .day() => カレンダー上でその日のindexの取得が可能
  const firstDayIndex = firstDay.day(); // 1 (2021/3/1の場合)

  return Array(35).fill(0).map((_, i) => {
    const diffFromFirstDay = i - firstDayIndex;

    return firstDay.add(diffFromFirstDay, 'day');
  })
};

export const getMonth = ({ year, month }) => {
  return dayjs(`${year}-${month}`);
}

export const isSameDay = (dayOne, dayTwo) => {
  const format = 'YYYYMMDD';
  return dayOne.format(format) === dayTwo.format(format);
}

export const isSameMonth = (dayOne, dayTwo) => {
  const format = 'YYYYMM';
  return dayOne.format(format) === dayTwo.format(format);
}

export const isFirstDay = (day) => {
  return day.date() === 1;
}
