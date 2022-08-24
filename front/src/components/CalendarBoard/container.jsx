import { connect } from "react-redux";
import CalendarBoard from "./presentation";
import { createCalendar } from "../../services/calendar";
import { setSchedules } from "../../services/schedule";

import {
  addScheduleOpenDialog,
  addScheduleSetValue,
} from "../../redux/addSchedule/actions";
import {
  currentScheduleSetItem,
  currentScheduleOpenDialog,
} from "../../redux/currentSchedule/actions";

const mapDispatchToProps = (dispatch) => ({
  openAddScheduleDialog: (d) => {
    dispatch(addScheduleOpenDialog());
    dispatch(addScheduleSetValue({ date: d }));
  },
  openCurrentScheduleDialog: (schedule, e) => {
    // 他のイベントが発火するのをキャンセル
    e.stopPropagation();
    dispatch(currentScheduleSetItem(schedule));
    dispatch(currentScheduleOpenDialog());
  },
});

const mapStateToProps = (state) => ({
  calendar: state.calendar,
  schedules: state.schedules,
});

// const mergeProps = (stateProps, dispatchProps) => ({
//   month: stateProps.calendar,
//   calendar: createCalendar(stateProps.calendar),
// });
const mergeProps = (stateProps, dispatchProps) => {
  const {
    calendar: month,
    schedules: { items: schedules },
  } = stateProps;

  const calendar = setSchedules(createCalendar(month), schedules);

  return {
    ...stateProps,
    ...dispatchProps,
    calendar,
    month,
  };
};

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(CalendarBoard);