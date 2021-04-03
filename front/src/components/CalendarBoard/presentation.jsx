import React from 'react';
import { GridList, Typography } from "@material-ui/core";
// JavaScriptファイル以外は拡張子を省略できない?
import CalendarElement from '../CalendarElement';
// import { createCalendar } from '../../services/calendar';
import * as styles from "./style.css";

// const calendar = createCalendar();

const daysOfTheWeek = ['日', '月', '火', '水', '木', '金', '土'];

// 引数の値 = mergeProps
const CalnedarBoard = ({ calendar, yearMonth, openAddScheduleDialog, openCurrentScheduleDialog }) => {
  return (
    <div className={styles.container}>
      <GridList className={styles.grid} cols={7} spacing={0} cellHeight="auto">
        {daysOfTheWeek.map(d => (
          <li key={d}>
            <Typography
              className={styles.days}
              color="textSecondary"
              align="center"
              variant="caption"
              component="div">
              {d}
            </Typography>
          </li>
        ))}
        {calendar.map(({ date, schedules }) => (
          // ISOStringという規格にする(一意の値)
          // c = dayjsオブジェクトの日付
          <li key={date.toISOString()} onClick={() => openAddScheduleDialog(date)}>
            {/* 🚨下記形式のpropsがコンポーネントに渡される
              { day: date, yearMonth: yearMonth, schedules: schedules } */}
            <CalendarElement day={date} yearMonth={yearMonth} schedules={schedules} onClickSchedule={openCurrentScheduleDialog}/>
          </li>
        ))}
      </GridList>
    </div>
  )
}

export default CalnedarBoard;
