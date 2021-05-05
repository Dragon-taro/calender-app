import {
  SCHEDULE_ADD_ITEM,
  SCHEDULES_FETCH_ITEM,
  SCHEDULES_SET_LOADING,
  SCHEDULES_DELETE_ITEM,
  SCHEDULES_ASYNC_FAILURE,
  SCHEDULES_RESET_ERROR
} from './actions';

const init = {
  items: [], // 追加データのkeys: { id, title, description, date, location }
  isLoading: false,
  error: null
};

const schedulesReducer = (state = init, action) => {
  const { type, payload, error } = action;

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
    case SCHEDULES_ASYNC_FAILURE:
      return { ...state, error };
    case SCHEDULES_RESET_ERROR:
      return { ...state, error: null };
    default:
      return state;
  }
};

export default schedulesReducer;
