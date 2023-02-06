import { connect } from "react-redux"
import { addScheduleCloseDialog, addScheduleSetValue } from "../../redux/addSchedule/actions"
import { AddScheduleDialog } from "./presentation"

const mapStateToProps = state => ({ schedule: state.addSchedule })

const mapDispatchToProps = dispatch => ({
  closeDialog: () => {
    dispatch(addScheduleCloseDialog())
  },
  setSchedule: value =>{
    dispatch(addScheduleSetValue(value))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(AddScheduleDialog)