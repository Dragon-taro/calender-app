import React from "react";
import ReactDOM from "react-dom";
import dayjs from "dayjs"
import "dayjs/locale/ja"
import { Provider } from "react-redux";
import { createStore } from "redux";

import CalendarBoard from "./components/CalendarBoard/container";
import rootReducer from "./redux/rootReducer";
import Navigation from "./components/Navigation/container";


dayjs.locale("ja")

const store = createStore(rootReducer)

const App = () => (
  <Provider store={store}>
    <Navigation />
    <CalendarBoard />
  </Provider>
);

ReactDOM.render(<App />, document.getElementById("root"));
