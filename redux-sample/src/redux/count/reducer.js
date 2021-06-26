// reducerの作成
import { INCREMENT, DECREMENT } from "./constants";

const initState = 0;

// reducerは第一引数に直前のstate、第二引数にactionを受け取る
// actionは分割代入を利用して展開してから受け取る
// INCREMENTなら、直前のstate + 引数　の新しいstateを返す
// DECREMENTなら、直前のstate - 引数　の新しいstateを返す
// 重要なのは、直接変更せずに、新しいstateを返していること(Reduxの掟)
export const count = (state = initState, { type, payload }) => {
  switch (type) {
    case INCREMENT:
      return state + payload;
    case DECREMENT:
      return state - payload;
    default:
      return state;
  }
};