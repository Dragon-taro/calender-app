import AddScheduleDialog from "./presentation";

import { connect } from "react-redux";
import { addScheduleOpenDialog } from "../../redux/addSchedule/actions";

import { addScheduleCloseDialog, addScheduleSetValue } from "../../redux/addSchedule/actions";

import { schedulesAddItem } from "../../redux/schedules/actions";

const mapDispatchToProps = (dispatch) => ({
  closeDialog: () => {
    dispatch(addScheduleCloseDialog());
  },
  setSchedule: (value) => {
    dispatch(addScheduleSetValue(value));
  },
  saveSchedule: (schedule) => {
    dispatch(schedulesAddItem(schedule));
    dispatch(addScheduleCloseDialog());
  },
});

const mergeProps = (stateProps, dispatchProps) => ({
  ...stateProps,
  ...dispatchProps,
  saveSchedule: () => {
    const {
      schedule: { form: schedule },
    } = stateProps;
    dispatchProps.saveSchedule(schedule);
  },
});

const mapStateToProps = (state) => ({ schedule: state.addSchedule });

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(AddScheduleDialog);