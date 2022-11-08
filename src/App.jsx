import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes/routes";
import "./styles.css";

const App = () => (
  <BrowserRouter>
    <Routes />
  </BrowserRouter>
);

export default App;
