import { deleteRequest, get, post } from "../../services/api"
import { schedulesAddItem, schedulesDeleteItem, schedulesFetchItem, schedulesSetLoading } from "./actions"
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

export const asyncSchedulesDeleteItem = id => async (dispatch, getState) => {
  dispatch(schedulesSetLoading())
  const currentSchedules = getState().schedules.items

  await deleteRequest(`schedules/${id}`)

  // 成功したらローカルのstateを削除 filter
  const newSchedules = currentSchedules.filter(s => s.id !== id)
  dispatch(schedulesDeleteItem(newSchedules))
}