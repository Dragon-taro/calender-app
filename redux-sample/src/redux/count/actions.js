import { DECREMENT } from "./constants";
import { INCREMENT } from "./contsants"

export const increment = payload => ({
  type: INCREMENT,
  payload
});

export const decrement = payload => ({
  type: DECREMENT,
  payload
});