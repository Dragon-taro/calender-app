import { connect } from "react-redux";

import { increment, decrement } from "../../redux/count/actions";

import Counter from "./presentation";

/*
/* 以下と同じ意味
const mapStateProps = state => {
  return { count: satte.count };
};
*/
const mapStateProps = ({ count }) => ({ count });

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
