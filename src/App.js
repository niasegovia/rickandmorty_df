import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./components/shared/Header/Header";
import styled from "styled-components";
import Bg from "../src/assets/img/bg.jpg";
import Home from "./Pages/Home/Home";
import ViewCharacter from "./Pages/ViewCharacter/ViewCharacter"

const Background = styled.div`
  background-image: url(${Bg});
  position: relative;
  heigth: 100vh;
  widht: 100vw;
  background-size: cover;
  background-attachment: fixed;
`;


function App() {
  return (
    <div className="app">
      <Background>
        <Header />
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path ="/:id" component={ViewCharacter} />
         </Switch>
      </Background>
    </div>
  );
}

export default App;
