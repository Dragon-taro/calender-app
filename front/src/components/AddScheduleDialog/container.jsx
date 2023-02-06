import { connect } from "react-redux"
import { addScheduleCloseDialog } from "../../redux/addSchedule/actions"
import { AddScheduleDialog } from "./presentation"

const mapStateToProps = state => ({ schedule: state.addSchedule })

const mapDispatchToProps = dispatch => ({
  closeDialog: () => {
    dispatch(addScheduleCloseDialog())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(AddScheduleDialog)