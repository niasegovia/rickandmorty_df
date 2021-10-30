import React from "react";
import Header from "./components/shared/Header/Header";
import List from "./components/structure/List/List";
import styled from "styled-components";
import Bg from "../src/assets/img/bg.jpg";

const Background = styled.div`
  background-image: url(${Bg});
  position: relative;
  heigth: 100vh;
  widht: 100vw;
  background-size: cover;
`;


function App() {
  return (
    <div className="app">
      <Background>
        <Header />
        <List />
      </Background>
    </div>
  );
}

export default App;
