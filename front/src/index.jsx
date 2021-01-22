import React from "react";
import ReactDOM from "react-dom";
import CalendarBoard from "./components/CalendarBoard";
import dayjs from "dayjs";
import "dayjs/locale/ja";

dayjs.locale("ja");

const App = () => <CalendarBoard />;

ReactDOM.render(<App />, document.getElementById("root"));
