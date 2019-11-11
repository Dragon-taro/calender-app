import React from "react";
import ReactDOM from "react-dom";

import CounterContainer from "./src/components/Counter/container";

const App = () => <CounterContainer />;

ReactDOM.render(<App />, document.getElementById("root"));
