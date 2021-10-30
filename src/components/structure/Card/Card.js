import React from "react";

const Card = (props) => {
    const character = props.data;
    return(
        <div className="card">
            <div className="card-body">
                <h5>{character.name}</h5>
                <h5>{character.status}</h5>
            </div>
        </div>
    )
}

export default Card;