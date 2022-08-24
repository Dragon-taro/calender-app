import React from "react";
import CalendarElement from "../CalendarElement";
import { GridList, Typography } from "@material-ui/core";
import ImageList from "@material-ui/core/ImageList";
import * as styles from "./style.css";

const days = ["日", "月", "火", "水", "木", "金", "土"];


const CalendarBoard = ({
  calendar,
  month,
  openAddScheduleDialog,
  openCurrentScheduleDialog,
}) => {
  console.log(calendar);
  return (
    <div className={styles.container}>
      <ImageList className={styles.grid} cols={7} gap={0} rowHeight="auto">
        {days.map((d) => (
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
        {calendar.map(({ date, schedules }) => (
          <li
            key={date.toISOString()}
            onClick={() => openAddScheduleDialog(date)}
          >
            <CalendarElement
              day={date}
              month={month}
              schedules={schedules}
              onClickSchedule={openCurrentScheduleDialog}
            />
          </li>
        ))}
      </ImageList>
    </div>
  );
};



export default CalendarBoard;
