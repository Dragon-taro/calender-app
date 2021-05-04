import { schedulesFetchItem, schedulesSetLoading } from './actions';
import { get } from '../../services/api';
import { formatSchedule } from '../../services/schedule';

export const asyncSchedulesFetchItem = ({ month, year }) => async dispatch => {
  dispatch(schedulesSetLoading);

  const schedules = await get(`schedules?month=${month}&year=${year}`);

  const formatedSchedules = schedules.map(schedule => formatSchedule(schedule));

  dispatch(schedulesFetchItem(formatedSchedules));
}
