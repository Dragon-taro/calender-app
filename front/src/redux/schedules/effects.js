import {
  schedulesFetchItem,
  schedulesSetLoading,
  schedulesAddItem,
  schedulesDeleteItem,
  schedulesAsyncFailure
} from './actions';
import { get, post, deleteRequest } from '../../services/api';
import { formatSchedule } from '../../services/schedule';

export const asyncSchedulesFetchItem = ({ month, year }) => async dispatch => {
  dispatch(schedulesSetLoading);

  try {
    const schedules = await get(`schedules?month=${month}&year=${year}`);

    const formatedSchedules = schedules.map(schedule => formatSchedule(schedule));

    dispatch(schedulesFetchItem(formatedSchedules));
  } catch (error) {
    dispatch(schedulesAsyncFailure(error.message));
  }
};

export const asyncSchedulesAddItem = (schedule) => async dispatch => {
  dispatch(schedulesSetLoading());

  try {
    const body = { ...schedule, date: schedule.date.toISOString() };
    const addedSchedule = await post('schedules', body);

    dispatch(schedulesAddItem(formatSchedule(addedSchedule)));
  } catch (error) {
    dispatch(schedulesAsyncFailure(error.message));
  }
};

export const asyncSchedulesDeleteItem = id => async (dispatch, getState) => {
  dispatch(schedulesSetLoading());

  try {
    await deleteRequest(`schedules/${id}`);

    const filteredSchedules = getState().schedules.items.filter(schedule => schedule.id != id);
    dispatch(schedulesDeleteItem(filteredSchedules));
  } catch (error) {
    dispatch(schedulesAsyncFailure(error.message));
  }
};
