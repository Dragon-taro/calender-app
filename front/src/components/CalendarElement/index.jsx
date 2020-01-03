import React from "react";
import dayjs from "dayjs";
import { Typography } from "@material-ui/core";

import { isSameMonth, isFirstDay, isSameDay } from "../../services/calendar";

import * as styles from "./style.css";

const CalendarElement = ({ day }) => {
  const today = dayjs();

  // 今月以外をグレーダウン
  const isCurrentMonth = isSameMonth(day, today);
  const textColor = isCurrentMonth ? "textPrimary" : "textSecondary";

  // 文字列のフォーマットをどうするか
  // 月の最初だけ月情報をつける
  const format = isFirstDay(day) ? "M月D日" : "D";

  // 当日かどうか判断
  const isToday = isSameDay(day, today);

  return (
    <div className={styles.element}>
      <Typography
        className={styles.date}
        color={textColor}
        align="center"
        variant="caption"
        component="div"
      >
        <span className={isToday ? styles.today : ""}>
          {day.format(format)}
        </span>
      </Typography>
    </div>
  );
};

export default CalendarElement;
