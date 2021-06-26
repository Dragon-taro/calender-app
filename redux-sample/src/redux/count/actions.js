import { INCREMENT, DECREMENT } from "./constants";

// これがAction
// payloadはnumber型の引数で受け取った分だけcountを増加/減少させることができるようにした
// increment(c)を呼ぶことでINCREMENTという引数のc分だけstateのcountを増加させるActionを発行することができるようになる(decrementも同様)
export const increment = payload => ({
  type: INCREMENT,
  payload
});

export const decrement = payload => ({
  type: DECREMENT,
  payload
});

