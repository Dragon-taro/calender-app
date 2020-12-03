import { connect } from "react-redux";
import AddScheduleDialog from "./presentation";

import {
  addScheduleCloseDialog,
  addScheduleSetValue
} from "../../redux/addSchedule/actions";

import { schedulesAddItem } from "../../redux/schedules/actions";

const mapStateToProps = state => ({ schedule: state.addSchedule });

const mapDispatchToProps = dispatch => ({
  closeDialog: () => {
    dispatch(addScheduleCloseDialog());
  },
  setSchedule: value => {
    dispatch(addScheduleSetValue(value));
  },
  // saveSchedule()としてscheduleAddItem()とaddScheduleCloseDialog()を呼び出し
  // scheduleAddItem()は引数にscheduleが必要だが、ここでは取得できないため、値をそのままdispatch
  saveSchedule: schedule => {
    dispatch(schedulesAddItem(schedule));
    dispatch(addScheduleCloseDialog());
  }
})

// ここでは必要なscheduleをstatePropsから取得できるため、saveScheduleに渡す
// formと言う名前だと何を表しているか分かりづらいため、変数名scheduleで受け取っている
const margeProps = (stateProps, dispatchProps) => ({
  ...stateProps,
  ...dispatchProps,
  saveSchedule: () => {
    const {
      schedule: { form: schedule }
    } = stateProps;
    dispatchProps.saveSchedule(schedule);
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  margeProps
)(AddScheduleDialog);
