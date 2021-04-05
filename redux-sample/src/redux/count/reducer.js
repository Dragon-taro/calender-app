import { INCREMENT } from "./consatnts"

const initState = 0;

export const count = (state = imState, {type, payload}) => {
  switch (type) {
    case INCREMENT:
      return state + payload;
    case DECREMENT:
      return state - payload;
    default:
      return state;
  }
};