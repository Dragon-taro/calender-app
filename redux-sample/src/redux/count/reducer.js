// 定数を使用したいのでimport
import { INCREMENT, DECREMENT } from './constants';

const initialState = 0;

// 第一引数: state
// 第二引数: action
// `state` はreduxが自動的に渡してくれる?
  // 初期表示時のみ`initialState`が使われる?
// type, payloadはactionsが渡ってくる
// export const count = (state = initialState, { type, payload }) => {
export const count = (state = initialState, action) => {
  const payload = action.payload;

  switch (action.type) {
    case INCREMENT:
      return state + payload;
    case DECREMENT:
      return state - payload;
    default:
      return state;
  }
};
