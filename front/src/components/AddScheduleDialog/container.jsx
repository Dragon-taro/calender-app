import { connect } from "react-redux";
import AddScheduleDialog from "./presentation";

import {
  addScheduleCloseDialog,
  addScheduleSetValue
} from "../../redux/addSchedule/actions";
import { schedulesAddItem } from "../../redux/schedules/actions";
import { isCloseDialog } from "../../services/schedule";

const mapStateToProps = state => ({ schedule: state.addSchedule });

const mapDispatchToProps = dispatch => ({
  closeDialog: () => {
    dispatch(addScheduleCloseDialog());
  },
  setSchedule: value => {
    dispatch(addScheduleSetValue(value));
  },
  saveSchedule: schedule => {
    dispatch(schedulesAddItem(schedule));
    dispatch(addScheduleCloseDialog());
  }
});

const mergeProps = (stateProps, dispatchProps) => {
  // ==========ここから編集する==========
  const {
    schedule: { form: schedule }
  } = stateProps;
  const { saveSchedule, closeDialog } = dispatchProps;

  return {
    ...stateProps,
    ...dispatchProps,
    saveSchedule: () => {
      saveSchedule(schedule);
    },
    closeDialog: () => {
      if (isCloseDialog(schedule)) {
        closeDialog();
      }
    }
  };
  // ==========ここまで編集する==========
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(AddScheduleDialog);
