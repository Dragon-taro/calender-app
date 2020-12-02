import { connect } from "react-redux";
import CalendarBoard from "./presentation";
import { createCalendar } from "../../service/calendar";

const mapStateToProps = state => ({ calendar: state.calendar });

const mergeProps = stateProps => ({
  calendar: createCalendar(stateProps.calendar)
});

export default connect(mapStateToProps, null, mergeProps)(CalendarBoard);
