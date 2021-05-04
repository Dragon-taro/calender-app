import {
  SCHEDULE_ADD_ITEM,
  SCHEDULES_FETCH_ITEM,
  SCHEDULES_SET_LOADING
} from './actions';

const init = {
  items: [], // 追加データのkeys: { id, title, description, date, location }
  isLoading: false
};

const schedulesReducer = (state = init, action) => {
  const { type, payload } = action;

  switch(type) {
    case SCHEDULE_ADD_ITEM:
      return { ...state, items: [...state.items, { ...payload, id: state.items.length + 1 }] };
    case SCHEDULES_FETCH_ITEM:
      return {
        ...state,
        items: payload,
        isLoading: false
      };
    case SCHEDULES_SET_LOADING:
      return {
        ...state,
        isLoading: true
      };
    default:
      return state;
  }
};

export default schedulesReducer;
