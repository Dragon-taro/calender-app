import { SCHEDULES_ADD_ITEM, SCHEDULES_DELETE_ITEM } from "./actions";

const init = {
  items: [],
  isLoading: false
};

const schedulesReducer = (state = init, action) => {
  const { type, payload } = action;

  switch (type) {
    case SCHEDULES_ADD_ITEM:
      return {
        ...state,
        items: [...state.items, { ...payload, id: state.items.length + 1 }]
      };
    case SCHEDULES_DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter(item => item.id !== payload)
      };
    default:
      return state;
  }
};

export default schedulesReducer;
