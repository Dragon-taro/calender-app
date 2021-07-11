import { connect } from "react-redux";
import { increment, decrement } from "../../redux/count/actions";

import Counter from "./presentation";

const mapStateProps = (state) => {
    return {count: state.count}
}

const mapDispatchProps = (dispatch) => {
  return {
    increment: (count) => {
      dispatch(increment(count));
    },
    decrement: (count) => {
      dispatch(decrement(count));
    },
  };
};

export default connect(mapStateProps, mapDispatchProps)(Counter);
