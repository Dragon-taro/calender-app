import React from "react";
import * as styles from "./style.css";

import CalendarElement from "../CalendarElement";

// カレンダー表示を読み込み
import { createCalendar } from "../../service/calendar";

// material-uiからデータを取得
import { GridList, Typography } from "@material-ui/core";

// 曜日の配列
const days = ["日","月","火","水","木","金","土"];

const CalendarBoard = () => {
  console.log(calendar);
  return(
    <div className={styles.container}>
      <GridList
        className={styles.grid}
        cols={7}
        spacing={0}
        cellHeight="auto">
        {days.map(d => (
          <li key={d}>
            <Typography
              className={styles.days}
              color="textSecondary"
              align="center"
              variant="caption"
              component="div"
              >
              {d}
            </Typography>
          </li>
        ))}
        {calendar.map(c => (
          <li key={c.toISOString()}>
            <CalendarElement day={c} />
          </li>
        ))}
      </GridList>
    </div>
  );
}

export default CalendarBoard;

// カレンダー配列
const calendar = createCalendar();
