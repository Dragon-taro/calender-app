import React from "react";

import { GridList } from '@material-ui/core';
import * as styles from './style.css';

import dayjs from 'dayjs';
import "dayjs/locale/ja";

dayjs.locale('ja');

const createCalender = () => {
    const firstDay = dayjs().startOf('month');

    const firstDayIndex = firstDay.day();

    return Array(35)
        .fill(0)
        .map((_, i) => {
            const diffFromFirstDay = i - firstDayIndex;
            const day = firstDay.add(diffFromFirstDay, 'day');

            return day;
        });
};

const calendar = createCalender();

const CalenderBoard = () => {
    console.log(calendar);
    return (
        <div className={styles.container}>
          <GridList className={styles.grid} cols={7} spacing={0} cellHeight="auto">
            {calendar.map(c => (
              <li key={c.toISOString()}>
                <div className={styles.element}>{c.format("D")}</div>
              </li>
            ))}
          </GridList>
        </div>
    );
};

export default CalenderBoard;