import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app";
import "styles/app.scss";

document.addEventListener(
  "DOMContentLoaded",
  (): void => {
    ReactDOM.render(<App />, document.getElementById("root"));
  }
);
