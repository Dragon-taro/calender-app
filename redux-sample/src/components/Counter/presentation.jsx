import React from "react";
import { increment } from "../../redux/count/actions";

const Counter = ({ count, increment, decrement }) => (
  <>
    <div>{count}</div>
    <button onClick={() => increment(1)}>+</button>
    <button onClick={() => decrement(1)}>+</button>
  </>
);

export default Counter;
