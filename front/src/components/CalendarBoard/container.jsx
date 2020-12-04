import { connect } from "react-redux";
import CalendarBoard from "./presentation";
import { createCalendar } from "../../service/calendar";
import {
  addScheduleOpenDialog,
  addScheduleSetValue
} from "../../redux/addSchedule/actions";
import { setSchedules } from "../../service/schedule";

const mapStateToProps = state => ({
  calendar: state.calendar,
  schedules: state.schedules
});

const mapDispatchToProps = dispatch => ({
  openAddScheduleDialog: (d) => {
    dispatch(addScheduleOpenDialog());
    dispatch(addScheduleSetValue({date: d}));
  }
})

const mergeProps = (stateProps, dispatchProps) => {
  const {
    calendar: month,
    schedules: {items: schedules}
  } = stateProps;

  const calendar = setSchedules(createCalendar(month), schedules);

  return {
    ...stateProps,
    ...dispatchProps,
    calendar,
    month
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(CalendarBoard);
