import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import FontStyles from "./assets/fonts/fonts";
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <FontStyles />
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);


