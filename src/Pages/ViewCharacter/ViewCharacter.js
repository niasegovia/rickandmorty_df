import React, { useState, useEffect } from "react";
import Api from "../../api/api";
import styled from "styled-components";
import RoundedTag from "../../components/structure/RoundedTag/RoundedTag";
/* import { Link } from "react-router-dom"; */

const StyledContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContainerInfos = styled.div`
  background-color: #12a6bd;
  width: 50%;
  height: 100vh;
  margin: 2%;
  border-radius: 120px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  box-shadow: 0 0 10px #c6dc5d;
`;

const InfosLabel = styled.h4`
  color: #f5f9f4;
  font-family: "Playfair Display", serif;
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
`;

const InfosTag = styled.div`
  background-color: #c8dd5c;
  border-radius: 50px;
  width: 50%;
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InfosData = styled.h4`
  color: #12a6bd;
  font-family: "Oxygen", sans-serif;
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
`;

const Name = styled.h2`
  color: #f5f9f4;
  font-family: "Playfair Display", serif;
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
`;

const Status = styled.h4`
  color: #12a6bd;
  font-family: "Oxygen", sans-serif;
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
`;
const Image = styled.img`
  width: 40%;
  border-radius: 50%;
`;

const CharacterView = (props) => {
  const id = props.match.params.id;
  const [character, setCharacter] = useState({});

  useEffect(() => {
    getCharacterById();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getCharacterById = async () => {
    const response = await Api.fetchGetById(id);
    const result = await response.json();
    setCharacter(result);
  };

  return (
    <StyledContainer>
      <ContainerInfos>
        <Image src={`${character.image}`} alt={`${character.name} image`} />
        <Name>{character.name}</Name>
        <InfosLabel>Species: </InfosLabel>
        <InfosTag>
          <InfosData> {character.species} </InfosData>
        </InfosTag>
        <InfosLabel>Gender:</InfosLabel>
        <InfosTag>
          <InfosData> {character.gender} </InfosData>
        </InfosTag>
        <InfosLabel> Status:</InfosLabel>
          <RoundedTag>
            <Status>{character.status}</Status>
          </RoundedTag>
      </ContainerInfos>
    </StyledContainer>
  );
};

export default CharacterView;
