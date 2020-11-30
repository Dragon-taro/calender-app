import { connect } from "react-redux";
import { increment,decrement } from "../../redux/count/actions";

import Counter from "./presentation";

// storeからどのstateを引っ張ってくるか定義
const mapStateProps = ({count}) => ({count});
// 以下と同じ内容
// const mapStateProps = state => {
//   return {count: state.count};
// }

// どのdispatchをpropsに渡すかを定義
const mapDispatchProps = dispatch => ({
  increment: count => {
    dispatch(increment(count));
  },
  decrement: count => {
    dispatch(decrement(count));
  }
});

export default connect(
  mapStateProps,
  mapDispatchProps
)(Counter);
