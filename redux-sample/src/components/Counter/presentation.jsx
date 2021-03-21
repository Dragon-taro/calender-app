// 表示だけの責務 <=> Container Component
import React from "react";
import { decrement, increment } from "../../redux/count/actions";

const Counter = ({ count, increment, decrement }) => {
  return (
    <div>
      <div>カウント数：{count}</div>
      {/* 1: 「+」ボタン押下 */}
      <button onClick={() => increment(1)}>+</button>
      <button onClick={() => decrement(1)}>-</button>
    </div>
  );
};

export default Counter;
