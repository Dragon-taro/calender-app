import { connect } from "react-redux"
import { addScheduleCloseDialog, addScheduleSetValue, addScheduleStartEdit } from "../../redux/addSchedule/actions"
import { currentScheduleCloseDialog } from "../../redux/currentSchedule/actions"
import { asyncSchedulesAddItem, asyncSchedulesDeleteItem } from "../../redux/schedules/effects"
import { isCloseDialog } from "../../services/schedule"
import { AddScheduleDialog } from "./presentation"

const mapStateToProps = state => ({ schedule: state.addSchedule })

const mapDispatchToProps = dispatch => ({
  closeDialog: () => {
    dispatch(addScheduleCloseDialog())
  },
  setSchedule: value => {
    dispatch(addScheduleSetValue(value))
  },
  saveSchedule: schedule => {
    dispatch(asyncSchedulesAddItem(schedule))
    dispatch(addScheduleCloseDialog())
  },
  deleteItem: id => {
    dispatch(asyncSchedulesDeleteItem(id))
    dispatch(currentScheduleCloseDialog())
  },
  setIsEditStart: () => {
    dispatch(addScheduleStartEdit())
  }
})

const mergeProps = (stateProps, dispatchProps) => {
  const {
    schedule: { form: schedule }
  } = stateProps
  const { saveSchedule, closeDialog } = dispatchProps

  return {
    ...stateProps,
    ...dispatchProps,
    saveSchedule: () => {
      saveSchedule(schedule)
    },
    closeDialog: () => {
      if (isCloseDialog(schedule)) {
        closeDialog()
      }
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(AddScheduleDialog)