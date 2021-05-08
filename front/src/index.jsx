import React from "react";
import ReactDOM from "react-dom";

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import CalendarBoard from "./components/CalendarBoard/container";
import dayjs from 'dayjs';
import 'dayjs/locale/ja';

import rootReducer from './redux/rootReducer';

import Navigation from './components/Navigation/container';

import AddScheduleDialog from './components/AddScheduleDialog/container';

import DayjsUtils from "@date-io/dayjs";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";

import CurrentScheduleDialog from './components/CurrentScheduleDialog/container';

import ErrorSnackbar from './components/ErrorSnackbar/container';

dayjs.locale('ja');

// store = { dispatch: f, sbscribe: f, getState: f, replaceReducer: f, Symbol: f }
// store.getState() = combineReducersの引数の値 = { calendar: { year: 2021, month: 3 } }
const store = createStore(rootReducer, applyMiddleware(thunk)); // storeの作成

const App = () => (
  <Provider store={store}>
    {/* 1. DatePickerコンポーネントを使用するため、MuiPickersUtilsProviderで囲う */}
    {/* 2. utils = date management libraryを指定 */}
    <MuiPickersUtilsProvider utils={DayjsUtils}>
      <Navigation />
      {/* CalendarBoard(container)以下で読み込んでいるコンポーネントでstoreを使えるようにする */}
      <CalendarBoard />
      <AddScheduleDialog />
      <CurrentScheduleDialog />
      <ErrorSnackbar />
    </MuiPickersUtilsProvider>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById("root"));
