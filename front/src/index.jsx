import React from "react";
import ReactDOM from "react-dom";

import CalerndarBoard from "./components/CalendarBoard";

const App = () => (
  <div>
    <CalerndarBoard />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
