import {
  SCHEDULE_ADD_ITEM,
  SCHEDULES_FETCH_ITEM,
  SCHEDULES_SET_LOADING,
  SCHEDULES_DELETE_ITEM
} from './actions';

const init = {
  items: [], // 追加データのkeys: { id, title, description, date, location }
  isLoading: false
};

const schedulesReducer = (state = init, action) => {
  const { type, payload } = action;

  switch(type) {
    case SCHEDULE_ADD_ITEM:
      return {
        ...state,
        items: [...state.items, payload],
        isLoading: false
      };
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
    case SCHEDULES_DELETE_ITEM:
      return {
        ...state,
        items: payload,
        isLoading: false
      };
    default:
      return state;
  }
};

export default schedulesReducer;
