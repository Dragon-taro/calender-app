import dayjs from "dayjs"
import {
  ADD_SCHEDULE_CLOSE_DIALOG,
  ADD_SCHEDULE_OPEN_DIALOG,
  ADD_SCHEDULE_SET_VALUE,
  ADD_SCHEDULE_START_EDIT
} from "./actions"

const init = {
  form: {
    title: "",
    description: "",
    date: dayjs(),
    location: "",
    isStartEdit: false
  },
  isDialogOpen: false
}

const addScheduleReducer = (state = init, action) => {
  const { type, payload } = action

  switch (type) {
    case ADD_SCHEDULE_SET_VALUE:
      return { ...state, form: { ...state.form, ...payload } }
    case ADD_SCHEDULE_OPEN_DIALOG:
      return { ...state, isDialogOpen: true }
    case ADD_SCHEDULE_CLOSE_DIALOG:
      return init
    case ADD_SCHEDULE_START_EDIT:
      return { ...state, isStartEdit: true }
    default:
      return state
  }
}
export default addScheduleReducer;