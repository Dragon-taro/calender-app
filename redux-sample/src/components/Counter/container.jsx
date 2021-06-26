// コンポーネントからreduxにアクセスできるようにする
// connectの登場

import { connect } from "react-redux";
import { INCREMENT, DECREMENT, increment, decrement } from "../../redux/count/actions";

import Counter from "./presentation";

// storeの現在の状態を引数として受け取って必要なものだけをpropsに流しているだけ
// propsはobjectだから返り値もobject。
//
// const mapStateProps = state => {
//  return { count: state.count };
// };
//
// と同じ意味。下はそれの省略形
const mapStateProps = ({ count }) => ({ count});

// 引数にdispatchを受取って必要なactionだけをdispatchする関数を定義してpropsとして渡している
const mapDispatchProps = dispatch => ({ 
  increment: count => {
    dispatch(increment(count));
  },
  decrement: count => {
    dispatch(decrement(count));
  }
}); 

// connectの引数について
// 第一引数のmapStateProps関数：storeからどのstateを引っ張ってくるかを定義する
// 第二引数のmapDispatchProps関数：どんなdispatcherをpropsに渡すかを定義する
export default connect(
  mapStateProps,
  mapDispatchProps
)(Counter); 




// presentational component
//  -> 表示にだけ責任を持つコンポーネントのこと
// container component
// ロジックに責任を持つコンポーネント

// 一つのコンポーネントは一つのことだけに関心を持つべきというオブジェクト志向に基づいている
// reduxの接続に関してはロジックに含まれるから、containerで行う
// 逆にどこに何を表示させるかはpresentetionalが責任を持つべき
// 保守性の観点

