import { DECREMET, INCREMENT } from "./constants"

const initState=0

export const count = (state=initState, {type, payload }) => {
  switch (type) {
    case INCREMENT:
      return state + payload
    case DECREMET:
      return state - payload
    default:
      return state
  }
}