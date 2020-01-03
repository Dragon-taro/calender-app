import React from "react";

import { Typography } from "@material-ui/core";

import * as styles from "./style.css";

const CalendarElement = ({ day }) => {
  // 文字列のフォーマットをどうするか
  const isFirstDay = day.date() === 1;
  // 月の最初だけ月情報をつける
  const format = isFirstDay ? "M月D日" : "D";

  return (
    <div className={styles.element}>
      <Typography
        className={styles.date}
        align="center"
        variant="caption"
        component="div"
      >
        {day.format(format)}
      </Typography>
    </div>
  );
};

export default CalendarElement;
