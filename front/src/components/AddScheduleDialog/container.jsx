import AddScheduleDialog from "./presentation";

import { connect } from "react-redux";
import { addScheduleOpenDialog } from "../../redux/addSchedule/actions";

import { addScheduleCloseDialog, addScheduleSetValue } from "../../redux/addSchedule/actions";

const mapDispatchToProps = (dispatch) => ({
  closeDialog: () => {
    dispatch(addScheduleCloseDialog());
  },
  setSchedule: (value) => {
    dispatch(addScheduleSetValue(value));
  },
});

const mapStateToProps = (state) => ({ schedule: state.addSchedule });

export default connect(mapStateToProps, mapDispatchToProps)(AddScheduleDialog);