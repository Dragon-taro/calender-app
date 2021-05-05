import { schedulesFetchItem, schedulesSetLoading, schedulesAddItem, schedulesDeleteItem } from './actions';
import { get, post, deleteRequest } from '../../services/api';
import { formatSchedule } from '../../services/schedule';

export const asyncSchedulesFetchItem = ({ month, year }) => async dispatch => {
  dispatch(schedulesSetLoading);

  const schedules = await get(`schedules?month=${month}&year=${year}`);

  const formatedSchedules = schedules.map(schedule => formatSchedule(schedule));

  dispatch(schedulesFetchItem(formatedSchedules));
};

export const asyncSchedulesAddItem = (schedule) => async dispatch => {
  dispatch(schedulesSetLoading());

  const body = { ...schedule, date: schedule.date.toISOString() };
  const addedSchedule = await post('schedules', body);

  dispatch(schedulesAddItem(formatSchedule(addedSchedule)));
};

export const asyncSchedulesDeleteItem = id => async (dispatch, getState) => {
  dispatch(schedulesSetLoading());

  await deleteRequest(`schedules/${id}`);

  const filteredSchedules = getState().schedules.items.filter(schedule => schedule.id != id);
  dispatch(schedulesDeleteItem(filteredSchedules));
};
