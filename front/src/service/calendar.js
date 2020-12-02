import dayjs from "dayjs";

// 指定日と今日は同じ日か？
export const isSameDay = (d1,d2) => {
  const format = "YYYYMMDD";
  return d1.format(format) === d2.format(format);
}

// 指定日と今日は同じ月か？
export const isSameMonth = (m1,m2) => {
  const format = "YYYYMMDD";
  return m1.format(format) === m2.format(format);
}

// 指定日は1日か？
export const isFirstDay = day => day.date() === 1;

export const createCalendar = () => {
  // 今月の最初の日を追加
  const firstDay = dayjs().startOf("month");
  // 最初の日の、曜日のindexを取得
  const firstDayIndex = firstDay.day();
  // 35の配列を取得
  return Array(35)
    .fill(0)
    .map((_, i)=> {
      // 月の最初の日の値が０になるように配列の要素をシフトさせる
      const diffFromFirstDay = i - firstDayIndex;
      const day = firstDay.add(diffFromFirstDay, "day");
      return day;
    });
}
