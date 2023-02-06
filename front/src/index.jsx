import React from "react";
import ReactDOM from "react-dom";
import dayjs from "dayjs"
import "dayjs/locale/ja"
import { Provider } from "react-redux";
import { createStore } from "redux";
import DayjsUtils from "@date-io/dayjs"
import { MuiPickersUtilsProvider } from "@material-ui/pickers"

import CalendarBoard from "./components/CalendarBoard/container";
import rootReducer from "./redux/rootReducer";
import Navigation from "./components/Navigation/container";
import AddScheduleDialog from "./components/AddScheduleDialog/container";


dayjs.locale("ja")

const store = createStore(rootReducer)

const App = () => (
  <Provider store={store}>
    <MuiPickersUtilsProvider utils={DayjsUtils}>
      <Navigation />
      <CalendarBoard />
      <AddScheduleDialog />
    </MuiPickersUtilsProvider>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById("root"));
