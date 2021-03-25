import React from 'react';
// CSSファイルを読み込む時は拡張子を省略できない
import * as styles from './style.css';

import { Typography } from '@material-ui/core';
import dayjs from 'dayjs';
import { isSameDay, isSameYearMonth, isFirstDay, getMonth, getFirstDayOfMonth } from '../../services/calendar';

// { day: ..., month: { month: 3, year: 2021 } }の形式でpropsとして渡ってくる
const CalendarElement = ({ day, yearMonth }) => {
  const firtDayOfMonth = getFirstDayOfMonth(yearMonth); // その年月のdayjsインスタンスが返る
  const isCurrentMonthDay = isSameYearMonth(day, firtDayOfMonth);
  const textColor = isCurrentMonthDay ? 'textPrimary' : 'textSecondary';

  const format = isFirstDay(day) ? 'M月D日' : 'D';
  const today = dayjs();
  const isToday = isSameDay(day, today);

  return (
    <div className={styles.element}>
      <Typography
        className={styles.date}
        color={textColor}
        align='center'
        variant='caption'
        component="div">
        <span className={isToday ? styles.today : ''}>
          { day.format(format) }
        </span>
      </Typography>
    </div>
  )
}

export default CalendarElement;
