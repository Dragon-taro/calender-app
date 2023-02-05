import { connect } from "react-redux"
import { createCalendar } from "../../services/calendar"
import CalendarBoard from "./presentation"

const mapStateToProps = state => ({ calendar: state.calendar })

const mergeProps = (stateProps, dispatchProps) => ({
  month: stateProps.calendar,
  calendar: createCalendar(stateProps.calendar)
})

export default connect(mapStateToProps, null, mergeProps)(CalendarBoard)