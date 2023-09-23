import { connect } from "react-redux"
import { currentScheduleCloseDialog } from "../../redux/currentSchedule/actions"
import { asyncSchedulesDeleteItem } from "../../redux/schedules/effects"
import CurrentScheduleDialog from "./presentation"

const mapStateToProps = state => ({ schedule: state.currentSchedule })

const mapDispatchToProps = dispatch => ({
  closeDialog: () => {
    dispatch(currentScheduleCloseDialog())
  },
  deleteItem: id => {
    dispatch(asyncSchedulesDeleteItem(id))
    dispatch(currentScheduleCloseDialog())
  }
})

const mergeProps = (stateProps, dispatchProps) => ({
  ...stateProps,
  ...dispatchProps,
  deleteItem: () => {
    const { id } = stateProps.schedule.item
    dispatchProps.deleteItem(id)
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(CurrentScheduleDialog)