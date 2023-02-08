import { get, post } from "../../services/api"
import { schedulesAddItem, schedulesFetchItem, schedulesSetLoading } from "./actions"
import { formatSchedule } from "../../services/schedule"

export const asyncSchedulesFetchItem = ({ month, year }) => async dispatch => {
  dispatch(schedulesSetLoading())

  const result = await get(`schedules?month=${month}&year=${year}`)

  const formatedSchedule = result.map(r => formatSchedule(r))

  dispatch(schedulesFetchItem(formatedSchedule))
}

export const asyncSchedulesAddItem = schedule => async dispatch => {
  // loading:trueにする
  dispatch(schedulesSetLoading())

  const body = { ...schedule, date: schedule.date.toISOString() }
  const result = await post("schedules", body)

  const newSchedule = formatSchedule(result)
  dispatch(schedulesAddItem(newSchedule))
}