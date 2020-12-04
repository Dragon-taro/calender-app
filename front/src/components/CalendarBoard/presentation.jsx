import React from "react";
import * as styles from "./style.css";

import CalendarElement from "../CalendarElement";

// material-uiからデータを取得
import { GridList, Typography } from "@material-ui/core";

import { addScheduleOpenDialog } from "../../redux/addSchedule/actions";

// 曜日の配列
const days = ["日","月","火","水","木","金","土"];

const CalendarBoard = ({
  calendar,
  month,
  openAddScheduleDialog,
  schedules }) => {

  console.log(schedules);

  return(
    <div className={styles.container}>
      <GridList
        className={styles.grid}
        cols={7}
        spacing={0}
        cellHeight="auto">

        {calendar.map(({date, schedules}) => (
          <li
            key={date.toISOString()}
            onClick={()=> openAddScheduleDialog(date)}
            >
              <CalendarElement day={date} month={month} schedules={schedules} />
          </li>
        ))}
      </GridList>
    </div>
  );
}

export default CalendarBoard;
