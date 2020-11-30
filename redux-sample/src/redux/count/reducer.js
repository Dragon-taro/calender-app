import { INCREMENT,DECREMENT } from "./constants";

const initState = 0;

// 第一引数にinitState、第二引数にactionを受け取る
// actionは分割代入を利用して展開から受け取っている
// INCREMENTならstateにpayloadの分だけ増加した新しいstateを返し
// DECREMENTならstateにpayloadの分だけ減少させたstateを返す
// 重要なのは直接変更せずに新しいstateを返すこと
export const count = (state = initState, {type,payload}) => {
  switch(type){
    case INCREMENT:
      return state + payload;
    case DECREMENT:
      return state - payload;
    default:
      return state;
  }
}
