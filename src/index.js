import React from "react";
import ReactDOM from "react-dom";
import List from "./list";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <List numItems={10000} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(< App />, rootElement);
