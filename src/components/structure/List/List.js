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
        getCharacters(Api.characterUrl);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const getCharacters = async (url) => {
        const response = await fetch(url);
        const data = await response.json();
        setCharacters((_characters) => {
            return [..._characters, ...data.results];
        });
        if (data.info && data.info.next) {
            getCharacters(data.info.next);
        }
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