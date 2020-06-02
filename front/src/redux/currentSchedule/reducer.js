import {
  CURRENT_SCHEDULE_SET_ITEM,
  CURRENT_SCHEDULE_OPEN_DIALOG,
  CURRENT_SCHEDULE_CLOSE_DIALOG,
} from "./actions";

const init = {
  item: null,
  isDialogOpen: false,
};

const currentScheduleReducer = (state = init, action) => {
  const { type, payload } = action;

  switch (type) {
    case CURRENT_SCHEDULE_SET_ITEM:
      return { ...state, item: payload };
    case CURRENT_SCHEDULE_OPEN_DIALOG:
      return { ...state, isDialogOpen: true };
    case CURRENT_SCHEDULE_CLOSE_DIALOG:
      return { ...state, isDialogOpen: false };
    default:
      return state;
  }
};

export default currentScheduleReducer;
