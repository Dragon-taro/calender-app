import React from "react";
import ReactDOM from "react-dom";

// react-redux: reduxはreactだけに用意されたものではない。reactでも使えるようにするためのもの
import { Provider } from 'react-redux';
import { createStore } from 'redux';

// 同階層の/redux/rootReducer
import rootReducer from './redux/rootReducer';
import Counter from "./components/Counter/container";

// reducerからstoreを作成
// store => このアプリで管理している全データ
// store = {dispatch: ƒ, subscribe: ƒ, getState: ƒ, replaceReducer: ƒ, Symbol(observable): ƒ}dispatch: ƒ dispatch(action)getState: ƒ getState()replaceReducer: ƒ replaceReducer(nextReducer)subscribe: ƒ subscribe(listener)Symbol(observable): ƒ observable()__proto__: Object
const store = createStore(rootReducer);

const App = () => (
  // Provider:
    // Counterコンポーネント(Providerタグで囲っているコンポーネントに対して)にstoreを渡す
    // Counterコンポーネントでreact-reduxのconnect()を使えるようにする?
  <Provider store={store}>
    <Counter />
  </Provider>
);


ReactDOM.render(<App />, document.getElementById("root"));
