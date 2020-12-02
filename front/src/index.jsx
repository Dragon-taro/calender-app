import React from "react";
import ReactDOM from "react-dom";

import {Provider} from "react-redux";
import {createStore} from "redux";

// DatePicker導入
import DayjsUtils from "@date-io/dayjs";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";

import CalendarBoard from "./components/CalendarBoard/container";

// day.jsからデータを取得
import dayjs from "dayjs";
import "dayjs/locale/ja";
dayjs.locale("ja");

import rootReducer from "./redux/rootReducer";

import Navigation from "./components/Navigation/container";

const store = createStore(rootReducer);

const App = () => (
  <Provider store={store} >
    <MuiPickersUtilsProvider utils={DayjsUtils}>
      <Navigation />
      <CalendarBoard />
    </MuiPickersUtilsProvider>
  </Provider>
)

ReactDOM.render(<App />, document.getElementById("root"));
