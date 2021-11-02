import React, { useState, useEffect } from "react";
import Card from "../Card/Card";
import Api from "../../../api/api";
import styled from "styled-components";


const ContainerCard = styled.div` 
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
`

const List = () => {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        getCharacters();
    }, []);

    const getCharacters = async () => {
        const response = await Api.fetchGetAll();
        const data = await response.json();
        setCharacters(data.results);
    };

    return (
        <ContainerCard>
            {characters.map((character, index) => (
                <Card data={character} key={index} />
            ))}
        </ContainerCard>
    );
};



export default List;