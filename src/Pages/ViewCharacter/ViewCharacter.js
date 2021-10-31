import React, { useState, useEffect } from "react";
import Api from "../../api/api";

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

    return(
        <div className="container-view">
            <h1>{character.name}</h1>
        </div>
    )
}

export default CharacterView;