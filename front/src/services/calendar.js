import dayjs from 'dayjs';

export const createCalendar = () => {
  // 今月の最初の日
  const firstDay = dayjs().startOf('month');

  // .day() => カレンダー上でその日のindexの取得が可能
  const firstDayIndex = firstDay.day(); // 1 (2021/3/1の場合)

  return Array(35).fill(0).map((_, i) => {
    const diffFromFirstDay = i - firstDayIndex;

    return firstDay.add(diffFromFirstDay, 'day');
  })
};
