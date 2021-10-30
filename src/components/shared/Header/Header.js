import React from "react";
import RickAndMortyLogo from '../../../assets/img/rick-and-morty-logo.png';

const Header = () => {
    return(
        <div className="header">
            <img src={RickAndMortyLogo} alt="Rick and Morty logo"/>
        </div>
    )
}

export default Header