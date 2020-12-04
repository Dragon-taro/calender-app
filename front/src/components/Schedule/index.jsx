import React from "react";

import * as style from "./style.css";

const Schedule = ({ schedule }) => {
  return <div className={style.schedule}>{schedule.title}</div>;
}

export default Schedule;
