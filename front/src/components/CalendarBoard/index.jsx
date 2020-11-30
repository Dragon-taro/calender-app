import React from "react";
import * as styles from "./style.css";

import CalendarElement from "../CalendarElement";

// カレンダー表示を読み込み
import { createCalendar } from "../../service/calendar";

// material-uiからデータを取得
import { GridList } from "@material-ui/core";

const CalendarBoard = () => {
  console.log(calendar);
  return(
    <div className={styles.container}>
      <GridList
        className={styles.grid}
        cols={7}
        spacing={0}
        cellHeight="auto">
        {calendar.map(c => (
          <li key={c.toISOString()}>
            <CalendarElement>{c.format("D")}</CalendarElement>
          </li>
        ))}
      </GridList>
    </div>
  );
}

export default CalendarBoard;

// カレンダー配列
const calendar = createCalendar();
