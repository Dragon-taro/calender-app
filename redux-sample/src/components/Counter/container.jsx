import { connect } from "react-redux";
import { decrement, increment } from "../../redux/count/actions";
import Counter from "./presentation";

const mapStateProps = ({ count }) => ({ count })
// 下に同じ意味
// const mapStateProps = state => {
//   return { count: state.count }
// }

const mapDispatchProps = dispatch => ({
  increment: count => {
    dispatch(increment(count))
  },
  decrement: count => {
    dispatch(decrement(count))
  }
})

export default connect(
  mapStateProps,
  mapDispatchProps
)(Counter)

// export default Counter;
