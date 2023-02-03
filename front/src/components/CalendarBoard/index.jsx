import React from 'react'
import { ImageList, ImageListItem } from "@material-ui/core"

import * as styles from "./style.css"

const calendar = [
  "29",
  "30",
  "10月1日",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "20",
  "21",
  "22",
  "23",
  "24",
  "25",
  "26",
  "27",
  "28",
  "29",
  "30",
  "31",
  "11月1日",
  "2"
];

const CalendarBoard = () => {
  return (
    <div className={styles.container}>
      <ImageList className={styles.grid} cols={7} rowHeight="auto">
        {calendar.map(c => (
          <ImageListItem >
            <div className={styles.element}>{c}</div>
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  )
}

export default CalendarBoard
