// 責務: 表示のみ

import React from "react";
import { increment, decrement } from "../../redux/count/actions";

const Counter = props => {
  console.log(props.count)

  return (
    <React.Fragment>
      <div>
        {props.count}
      </div>

      <button onClick={() => props.increment(1)}>+</button>
      <button onClick={() => props.decrement(1)}>-</button>
    </React.Fragment>
  )
}

export default Counter;
