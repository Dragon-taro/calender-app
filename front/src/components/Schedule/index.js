import React from "react";

import * as styles from "./style.css";

const Schedule = ({ schedule, onClickSchedule }) => {
  return (
    <div
      className={styles.schedule}
      // 以下の行を追加
      onClick={(e) => onClickSchedule(schedule, e)}
    >
      {schedule.title}
    </div>
  );
};

export default Schedule;
