import React from "react";
import dayjs from "dayjs";

import * as styles from "./style.css";

import { Typography } from "@material-ui/core";

// ロジックのインポート
import { isSameMonth, isFirstDay, isSameDay } from '../../service/calendar';

// ({children})にprops.childrenが入る
const CalendarElement = ({day}) => {

  const today = dayjs();

  // 当日かどうか判定
  const isToday = isSameDay(day,today);

  // 文字列のフォーマットをどうするか
  // 月の最初だけ月情報をつける
  const format = isFirstDay(day)?"M月D日":"D";

  //　今月以外をグレーダウン
  const isCurrentMonth = isSameMonth(day,today);
  // isCurrentMonth...true=textPrimary(濃い黒)false=textSecondary(グレー)
  const textColor = isCurrentMonth?"textPrimary":"textSecondary";

  return (
    <div className={styles.element}>
      <Typography
        className={styles.date}
        color={textColor}
        align="center"
        variant="caption"
        component="div"
        >
        <span
          className={isToday?styles.today: ""}
          >
          {day.format(format)}
        </span>
      </Typography>
    </div>
  )
}

export default CalendarElement;
