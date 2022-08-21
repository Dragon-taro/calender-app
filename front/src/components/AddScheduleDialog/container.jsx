import AddScheduleDialog from "./presentation";

import { connect } from "react-redux";
import { addScheduleOpenDialog } from "../../redux/addSchedule/actions";

import { addScheduleCloseDialog } from "../../redux/addSchedule/actions";

const mapDispatchToProps = (dispatch) => ({
  closeDialog: () => {
    dispatch(addScheduleCloseDialog());
  },
});

const mapStateToProps = (state) => ({ schedule: state.addSchedule });

export default connect(mapStateToProps, mapDispatchToProps)(AddScheduleDialog);