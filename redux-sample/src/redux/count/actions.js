import { DECREMET, INCREMENT } from "./constants";

export const increment = payload =>({
  type: INCREMENT,
  payload
})

export const decrement = payload => ({
  type: DECREMET,
  payload
})