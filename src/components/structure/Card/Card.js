import React from "react";
import styled from "styled-components";
import RoundedTag from "../RoundedTag/RoundedTag";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
  text-decoration: none;
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
    box-shadow: 0 0 10px #c6dc5d;
`;

const Name = styled.h3`
  color: #f5f9f4;
  font-family: "Playfair Display", serif;
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
`;
const Status = styled.h5`
  color: #12a6bd;
  font-family: "Oxygen", sans-serif;
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
  width: 100%;
`;
const Image = styled.img`
  width: 80%;
  border-radius: 50%;
`;



const Card = (props) => {
  const character = props.data;
  return (
    <StyledLink to={`/${character.id}`}>
        <Image src={`${character.image}`} alt={`${character.name} image`} />
        <Name>{character.name}</Name>
        <RoundedTag>
          <Status>{character.status}</Status>
        </RoundedTag>
    </StyledLink>
  );
};

export default Card;
