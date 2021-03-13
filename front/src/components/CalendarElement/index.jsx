import React from 'react';
// CSSファイルを読み込む時は拡張子を省略できない
import * as styles from './style.css';

import { Typography } from '@material-ui/core';

// 引数を分割して代入する方法?
// { day } => props.day
const CalendarElement = ({ day }) => {
  const isFirstDay = day.date() === 1;
  const format = isFirstDay ? 'M月D日' : 'D';

  return (
    <div className={styles.element}>
      <Typography
        className={styles.date}
        align='center'
        variant='caption'
        component="div"
      >
        { day.format(format) }
      </Typography>
    </div>
  )
}

export default CalendarElement;
