import React from "react";
import { increment } from "../../redux/count/actions";

const Counter = ({ count, increment, decrement }) => {
  console.log(props);

  return (
    <>
      <div>counter</div>
      <button onClick={() => increment(1}}>+</button>
      <button onClick={() => increment(1}}>+</button>
    </>
  );
};

export default Counter;
