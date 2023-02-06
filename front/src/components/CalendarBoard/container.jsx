import { connect } from "react-redux"
import { addScheduleOpenDialog } from "../../redux/addSchedule/actions"
import { createCalendar } from "../../services/calendar"
import CalendarBoard from "./presentation"

const mapStateToProps = state => ({ calendar: state.calendar })

const mapDispatchToProps = dispath => ({
  openAddScheduleDialog: () => {
    dispath(addScheduleOpenDialog())
  }
})

const mergeProps = (stateProps, dispatchProps) => ({
  ...stateProps,
  ...dispatchProps,
  month: stateProps.calendar,
  calendar: createCalendar(stateProps.calendar)
})

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(CalendarBoard)