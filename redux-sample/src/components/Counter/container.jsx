// ロジックの責務(reduxへの接続) <=> Presentational Component
import { connect } from 'react-redux';

import { increment, decrement } from '../../redux/count/actions';
import Counter from "./presentation";


// Storeが持つ状態 `State` を定義
/*
  stateはどこからきた?
  const mapStateToProps = (state) => {
    return { count: state.count }
  };
*/
// 引数の `count` => 現在の状態
const mapStateToProps = ({ count }) => ({ count });

// reducerにアクションを通知する関数 `dispatch` を定義
// index.jsでstoreが渡ってきているので、`dispatch`が使える?
const mapDispatchToProps = dispatch => ({
// 2:下記関数が実行される
  increment: count => {
    // 3:actionsに通知
    dispatch(increment(count));
  },
  decrement: count => {
    dispatch(decrement(count));
  }
});
// 下記と同じ
/*
const mapDispatchToProps = (dispatch) => {
  return {
    increment: id => {
      dispatch(increment(id))
    },
    decrement: id => {
      dispatch(decrement(id))
    }
  }
}
*/

// 上記で定義したStateとDispatcherをCounterコンポーネントに props として渡している
// 第一引数：storeからどのようなstateを引っ張ってくるか
// 第二引数：どのようなdispatcherを渡すか
// connect: index.jsで定義したprops.storeの中から、Counterコンポーネントに必要なものだけを渡す役割?
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
