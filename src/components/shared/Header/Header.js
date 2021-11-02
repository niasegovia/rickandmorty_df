import React from "react";
import styled from "styled-components";
import RickAndMortyLogo from "../../../assets/img/rick-and-morty-logo.png";

const Logo = styled.img`
  width: 30%;
`;
const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Header = () => {
  return (
    <StyledWrapper>
      <Logo src={RickAndMortyLogo} alt="Rick and Morty logo" />
    </StyledWrapper>
  );
};

export default Header;
