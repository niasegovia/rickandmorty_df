import React from "react";
import styled from 'styled-components';

const StyledContainer = styled.div`
    background-color: #12A6BD;
    width: 210px;
    height: 260px;
    margin: 2%;
    border-radius: 20%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

`




const Card = (props) => {
    const character = props.data;
    return(
        <StyledContainer>
            
                <h5>{character.name}</h5>
                <h5>{character.status}</h5>
        </StyledContainer>
    )
}

export default Card;