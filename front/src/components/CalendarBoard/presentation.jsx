import React from 'react'
import { ImageList, ImageListItem, Typography } from "@material-ui/core"

import CalendarElement from '../CalendarElement'

import * as styles from "./style.css"

const days = ["日", "月", "火", "水", "木", "金", "土"]

const CalendarBoard = ({
  calendar,
  month,
  openAddScheduleDialog
}) => {
  console.log(calendar)
  return (
    <div className={styles.container}>
      <ImageList className={styles.grid} cols={7} rowHeight="auto">
        {days.map((d, i) => (
          <ImageListItem key={i}>
            <Typography
              className={styles.days}
              color="textSecondary"
              align="center"
              variant="caption"
              component="div"
            >
              {d}
            </Typography>
          </ImageListItem>
        ))}
        {calendar.map(({ date, schedules }) => (
          <ImageListItem
            key={date.toISOString()}
            onClick={() => openAddScheduleDialog(date)}
          >
            <CalendarElement day={date} month={month} schedules={schedules} />
          </ImageListItem>
        ))}
      </ImageList>
    </div >
  )
}


export default CalendarBoard
