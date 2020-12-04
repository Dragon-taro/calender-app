import React from "react";

import * as style from "./style.css";

const Schedule = ({ schedule, onClickSchedule }) => {
  return (
    <div
      className={style.schedule}
      onClick={e => onClickSchedule(schedule, e)}
    >
      {schedule.title}
    </div>
  );
}

export default Schedule;
