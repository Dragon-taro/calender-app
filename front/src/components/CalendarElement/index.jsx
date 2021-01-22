import React from "react";
import dayjs from "dayjs";
import * as styles from "./style.css";
import { isSameMonth, isFirstDay, isSameDay } from "../../services/calendar";

import { Typography } from "@material-ui/core";

const CalendarElement = ({ day }) => {
  const format = isFirstDay(day) ? "M月D日" : "D";
  const today = dayjs();
  const isToday = isSameDay(day, today);
  const isCurrentMonth = isSameMonth(day, today);
  const textColor = isCurrentMonth ? "textPrimary" : "textSecondary";

  return (
    <div className={styles.element}>
      <Typography
        className={styles.date}
        color={textColor}
        align="center"
        variant="caption"
        component="div"
      >
        <span className={isToday ? styles.today : ""}>
          {day.format(format)}
        </span>
      </Typography>
    </div>
  );
};

export default CalendarElement;