import { INCREMENT, DECREMENT } from "./constants";

const initState = 0;

export const count = (state = initState, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + action.payload;
    case DECREMENT:
      return state - action.payload;
    default:
      return state;
  }
};
