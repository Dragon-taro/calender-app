import React from "react";

const Counter = (props) => {
  console.log(props);
  const {count, increment, decrement} = props;
  return (
    <>
      <div>count:{count}</div>
      <button onClick={() => increment(1)}>+</button>
      <button onClick={() => decrement(1)}>-</button>
    </>
  );
};

export default Counter;
