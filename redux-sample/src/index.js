import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { createStore } from "redux";

import rootReducer from "./redux/rootReducer";
import Counter from "./components/Counter/container";

//  storeの作成
const store = createStore(rootReducer);

const App = () => (
  // Providerを使用しreactにstoreを渡す
  <Provider store={store}>
    <Counter />
  </Provider>
);

ReactDOM.render(<App />, document.getElementById("root"));
