import dayjs from "dayjs";

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
