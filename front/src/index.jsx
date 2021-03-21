import React from "react";
import ReactDOM from "react-dom";

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import CalendarBoard from "./components/CalendarBoard/container";
import dayjs from 'dayjs';
import 'dayjs/locale/ja';

import rootReducer from './redux/rootReducer';

dayjs.locale('ja');

// store = { dispatch: f, sbscribe: f, getState: f, replaceReducer: f, Symbol: f }
// store.getState() = combineReducersの引数の値 = { calendar: { year: 2021, month: 3 } }
const store = createStore(rootReducer); // storeの作成

const App = () => (
  <Provider store={store}>
    {/* CalendarBoard(container)以下で読み込んでいるコンポーネントでstoreを使えるようにする */}
    <CalendarBoard />
  </Provider>
);

ReactDOM.render(<App />, document.getElementById("root"));
