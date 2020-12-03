import { connect } from "react-redux";
import AddScheduleDialog from "./presentation";

import { addScheduleCloseDialog } from "../../redux/addSchedule/actions";

const mapStateToProps = state => ({ schedule: state.addSchedule });

const mapDispatchToProps = dispatch => ({
  closeDialog: () => {
    dispatch(addScheduleCloseDialog());
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(AddScheduleDialog);
