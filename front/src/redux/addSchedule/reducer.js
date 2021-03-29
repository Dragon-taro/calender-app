import {
  ADD_SCHEDULE_SET_VALUE,
  ADD_SCHEDULE_OPEN_DIALOG,
  ADD_SCHEDULE_CLOSE_DIALOG
} from './actions';
import dayjs from 'dayjs';

const init = {
  form: {
    title: '',
    description: '',
    date: dayjs(),
    location: ''
  },
  isDialogOpen: false
};

const addScheduleReducer = (state = init, action) => {
  const { type, payload } = action; // action = { type: ..., payload: ... }

  switch (type) {
    case ADD_SCHEDULE_SET_VALUE:
      // { ...state, form: ... } => stateを展開するが、formキーのvalueのみ更新
      // 下記書き方はimmutable
      /* form: { ...state.form, ...payload }
        => form: { title: '', description: '', date: null, location: '', title: 'タイトルが更新される' }
        => 同一keyがある場合、後勝ち */
      return { ...state, form: { ...state.form, ...payload } };
    case ADD_SCHEDULE_OPEN_DIALOG:
      return { ...state, isDialogOpen: true };
    case ADD_SCHEDULE_CLOSE_DIALOG:
      return init;
    default:
      return state;
  }
};

export default addScheduleReducer;
