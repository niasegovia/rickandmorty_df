import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  background-color: #12a6bd;
  width: 210px;
  height: 260px;
  margin: 2%;
  border-radius: 20%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  :hover {
    box-shadow: 0 0 10px #C6DC5D;
  }
`;

const Name = styled.h3`
  color: #f5f9f4;
  font-family: "Playfair Display", serif;
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
`;
const Status = styled.h5`
  color: #f5f9f4;
  font-family: "Oxygen", sans-serif;
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
`;
const Image = styled.img`
  width: 80%;
  border-radius: 50%;
`;

const Card = (props) => {
  const character = props.data;
  return (
    <StyledContainer>
      <Image src={`${character.image}`} alt={`${character.name} image`} />
      <Name>{character.name}</Name>
      <Status>{character.status}</Status>
    </StyledContainer>
  );
};

export default Card;
