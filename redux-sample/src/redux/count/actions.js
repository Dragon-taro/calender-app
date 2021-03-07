// actions: データを更新するための受け付け係
import { INCREMENT, DECREMENT } from './constants';

// 4:reducerに通知
/*export const increment = payload => ({
  type: INCREMENT,
  payload
});*/

// 下記の書き方でも動く
export const increment = (payload) => {
  return {
    type: INCREMENT,
    payload: payload
  }
};

export const decrement = payload => ({
  type: DECREMENT,
  payload
});
