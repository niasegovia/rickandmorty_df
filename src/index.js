import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import styled from "styled-components";
import Bg from "../src/assets/img/bg.jpg";

const Background = styled.div`
  background-image: url(${Bg});
  background-size: cover;
  background-position: center center;
  height: 100vh;
  width: 100vw;
`;

ReactDOM.render(
  <React.StrictMode>
    <Background>
      <App />
    </Background>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
