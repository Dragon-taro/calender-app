import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import { createStore, applyMiddleware } from "redux";
// DatePicker導入
import DayjsUtils from "@date-io/dayjs";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import CalendarBoard from "./components/CalendarBoard/container";
// day.jsからデータを取得
import dayjs from "dayjs";
import "dayjs/locale/ja";
import AddScheduleDialog from "./components/AddScheduleDialog/container";
dayjs.locale("ja");
import rootReducer from "./redux/rootReducer";
import Navigation from "./components/Navigation/container";
import CurrentScheduleDialog from "./components/CurrentScheduleDialog/container.jsx";
import thunk from "redux-thunk";

const store = createStore(rootReducer, applyMiddleware(thunk));

const App = () => (
  <Provider store={store} >
    <MuiPickersUtilsProvider utils={DayjsUtils}>
      <Navigation />
      <CalendarBoard />
      <AddScheduleDialog />
      <CurrentScheduleDialog />
    </MuiPickersUtilsProvider>
  </Provider>
)

ReactDOM.render(<App />, document.getElementById("root"));
