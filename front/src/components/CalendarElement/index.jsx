import React from 'react'
import { Typography } from '@material-ui/core'
import dayjs from 'dayjs'

import * as style from "./style.css"
import { getMonth, isFirstDay, isSameDay, isSameMonth } from '../../services/calendar'
import Schedule from '../Schedule'


const CalendarElement = ({ day, month, schedules, ...props }) => {
  // 今月以外をグレーダウン
  const currentMonth = getMonth(month)
  const isCurrentMonth = isSameMonth(day, currentMonth)
  const textColor = isCurrentMonth ? "textPrimary" : "textSecondary"

  // 月の最初だけ月情報をつける
  const format = isFirstDay(day) ? "M月D日" : "D"

  // 当日かを判断
  const today = dayjs()
  const isToday = isSameDay(day, today)

  return (
    <div className={style.element}>
      <Typography
        className={style.date}
        color={textColor}
        align="center"
        variant='caption'
        component="div"
      >
        <span className={isToday ? style.today : ""}>
          {day.format(format)}
        </span>
      </Typography>
      <div className={style.schedules}>
        {schedules.map(e => (
          <Schedule key={e.id} schedule={e} {...props} />
        ))}
      </div>
    </div>
  )
}

export default CalendarElement
