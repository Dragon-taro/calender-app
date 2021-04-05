import { DECREMENT } from "./constants";
import { INCREMENT } from "./constants"

export const increment = payload => ({
  type: INCREMENT,
  payload
});

export const decrement = payload => ({
  type: DECREMENT,
  payload
});