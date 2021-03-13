import React from 'react';
// CSSファイルを読み込む時は拡張子を省略できない
import * as styles from './style.css';

import { Typography } from '@material-ui/core';
import dayjs from 'dayjs';
import { isSameDay, isSameMonth, isFirstDay } from '../../services/calendar';

// 引数を分割して代入する方法?
// { day } => props.day
const CalendarElement = ({ day }) => {
  const format = isFirstDay(day) ? 'M月D日' : 'D';
  const today = dayjs();
  const isToday = isSameDay(day, today)
  const isThisMonth = isSameMonth(day, today);
  const textColor = isThisMonth ? 'textPrimary' : 'textSecondary';

  return (
    <div className={styles.element}>
      <Typography
        className={styles.date}
        color={textColor}
        align='center'
        variant='caption'
        component="div"
      >
        <span className={isToday ? styles.today : ''}>
          { day.format(format) }
        </span>
      </Typography>
    </div>
  )
}

export default CalendarElement;
