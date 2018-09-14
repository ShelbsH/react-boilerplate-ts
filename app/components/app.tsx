import React from "react";
import { hot } from "react-hot-loader";
import { Main } from "./main";

const App: React.SFC = () => <Main message="Typescript" />;

export default hot(module)(App);
