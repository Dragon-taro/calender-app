import { connect } from "react-redux"
import { addScheduleOpenDialog, addScheduleSetValue } from "../../redux/addSchedule/actions"
import { currentScheduleOpenDialog, currentScheduleSetItem } from "../../redux/currentSchedule/actions"
import { createCalendar } from "../../services/calendar"
import { setSchedules } from "../../services/schedule"
import CalendarBoard from "./presentation"

const mapStateToProps = state => ({
  calendar: state.calendar,
  schedules: state.schedules
})

const mapDispatchToProps = dispatch => ({
  openAddScheduleDialog: d => {
    dispatch(addScheduleOpenDialog())
    dispatch(addScheduleSetValue({ date: d }))
  },

  openCurrentScheduleDialog: (schedule, e) => {
    // 日付の箱に登録している新しい予定を作成するためのdialogを開くeventを抑制して、今回のeventのみを発火するため。
    e.stopPropagation()

    dispatch(currentScheduleSetItem(schedule))
    dispatch(currentScheduleOpenDialog())
  }
})

const mergeProps = (stateProps, dispatchProps) => {
  const {
    calendar: month,
    schedules: { items: schedules }
  } = stateProps

  const calendar = setSchedules(createCalendar(month), schedules)
  return {
    ...stateProps,
    ...dispatchProps,
    calendar,
    month
  }
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(CalendarBoard)