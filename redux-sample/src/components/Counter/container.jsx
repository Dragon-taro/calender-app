// 責務: ロジック

import { connect } from 'react-redux'
import { increment, decrement } from '../../redux/count/actions'

import Counter from "./presentation";

// 下でもOKだけど、ES6使おうね
// const mapStateProps = state => {
//   return { count: state.count };
// };
const mapStateProps = ({ count }) => ({ count })
const mapDispatchProps = (dispatch) => ({
  increment: count => {
    dispatch(increment(count))
  },
  decrement: count => {
    dispatch(decrement(count))
  }
})

// connectの引数は第一引数が、どのstoreからstateを持ってくるかの指定
// 第二引数はどんなdispatcherをpropsに渡すか
export default connect(mapStateProps, mapDispatchProps)(Counter)