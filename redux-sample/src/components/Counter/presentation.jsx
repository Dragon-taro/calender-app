// さっき作ったcontainerからpropsを受け取る


import React from "react";

// Counterコンポーネントを作成、propsを受け取る
  // const Counter = props => {
  //   console.log(props);

  //   return (
  //     <div>
  //       <div>counter</div>
  //     </div>
  //   );
  // };
const Counter = ({ count, increment, decrement }) => (
  <>
  <div>{ count }</div>
  <button onClick={() => increment(1)} >増やすよ</button>
  <button onClick={() => decrement(1)} >減らすよ</button>
  </>
);


export default Counter;
