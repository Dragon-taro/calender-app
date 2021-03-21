import React from 'react';
import { GridList, Typography } from "@material-ui/core";
// JavaScriptファイル以外は拡張子を省略できない?
import CalendarElement from '../CalendarElement';
// import { createCalendar } from '../../services/calendar';
import * as styles from "./style.css";

// const calendar = createCalendar();

const daysOfTheWeek = ['日', '月', '火', '水', '木', '金', '土'];

// 引数 = { calendar: { year: 2021, month: 3} }
  // { calneder } => calendar = { year: 2021, month: 3 }
  // calendar = mergePropsの値
const CalnedarBoard = ({ calendar }) => {
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
        {calendar.map(c => (

          // ISOStringという規格にする(一意の値)
          <li key={c.toISOString()}>
            {/* <CalendarElement children={c.format('D')}></CalendarElement>と同じ */}
            <CalendarElement day={c} />
          </li>
        ))}
      </GridList>
    </div>
  )
}

export default CalnedarBoard;
