import React from "react";
import ReactDOM from "react-dom";

import dayjs from "dayjs";
import "dayjs/locale/ja";

import CalerndarBoard from "./components/CalendarBoard";

const App = () => (
  <div>
    <CalerndarBoard />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
