import AddScheduleDialog from './presentation';
import { connect } from 'react-redux';
import {
  addScheduleCloseDialog,
  addScheduleSetValue,
  addScheduleStartEdit
} from '../../redux/addSchedule/actions';

import { asyncSchedulesAddItem } from '../../redux/schedules/effects';

import { isCloseDialog } from '../../services/schedule';

const mapStateToProps = state => ({ schedule: state.addSchedule });

const mapDispatchToProps = dispatch => ({
  closeDialog: () => {
    dispatch(addScheduleCloseDialog());
  },
  setSchedule: (value) => { // eg. { title: 'タイトル' }
    dispatch(addScheduleSetValue(value));
  },
  saveSchedule: (schedule) => {
    dispatch(asyncSchedulesAddItem(schedule));
    dispatch(addScheduleCloseDialog());
  },
  setIsEditStart: () => {
    dispatch(addScheduleStartEdit());
  }
});

const mergeProps = (stateProps, dispatchProps) => {
  const { schedule: { form: schedule } } = stateProps;
  const { saveSchedule, closeDialog } = dispatchProps;

  return {
    ...stateProps,
    ...dispatchProps,
    saveSchedule: () => {
      dispatchProps.saveSchedule(schedule);
    },
    closeDialog: () => {
      if (isCloseDialog(schedule)) {
        closeDialog();
      }
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(AddScheduleDialog);
