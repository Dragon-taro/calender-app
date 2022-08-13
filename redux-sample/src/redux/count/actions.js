import { INCREMENT, DECREMENT } from "./constants";

// action creator 
export const increment = (payload) => ({
  type: INCREMENT,
  payload,
});

export const decrement = (payload) => ({
  type: DECREMENT,
  payload,
});
