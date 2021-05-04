import { schedulesFetchItem, schedulesSetLoading, schedulesAddItem } from './actions';
import { get, post } from '../../services/api';
import { formatSchedule } from '../../services/schedule';

export const asyncSchedulesFetchItem = ({ month, year }) => async dispatch => {
  dispatch(schedulesSetLoading);

  const schedules = await get(`schedules?month=${month}&year=${year}`);

  const formatedSchedules = schedules.map(schedule => formatSchedule(schedule));

  dispatch(schedulesFetchItem(formatedSchedules));
}

export const asyncSchedulesAddItem = (schedule) => async dispatch => {
  dispatch(schedulesSetLoading());

  const body = { ...schedule, date: schedule.date.toISOString() };
  const addedSchedule = await post('schedules', body);

  dispatch(schedulesAddItem(formatSchedule(addedSchedule)));
};
