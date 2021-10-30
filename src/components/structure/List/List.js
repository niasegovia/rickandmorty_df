import React, { useState, useEffect } from "react";
import Card from "../Card/Card";
import Api from "../../../api/api";

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
        <div className="container-card">
            {characters.map((character, index) => (
                <Card data={character} key={index} />
            ))}
        </div>
    );
};



export default List;