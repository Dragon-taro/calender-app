import { connect } from "react-redux";

import CalendarBoard from "./presentation";
import { createCalendar } from "../../services/calendar";
import {
  addScheduleOpenDialog,
  addScheduleSetValue
} from "../../redux/addSchedule/actions";

const mapStateToProps = state => ({
  calendar: state.calendar,
  schedules: state.schedules
});
const mapDispatchToProps = dispatch => ({
  openAddScheduleDialog: d => {
    dispatch(addScheduleOpenDialog());
    dispatch(addScheduleSetValue({ date: d }));
  }
});

const mergeProps = (stateProps, dispatchProps) => ({
  // ...statePropsを追加
  ...stateProps,
  calendar: createCalendar(stateProps.calendar),
  month: stateProps.calendar.month,
  ...dispatchProps
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(CalendarBoard);
