import React from 'react';
import { StyledHeader } from './styles/StyledHeader';

function Header({score, highScore}){
    return(
        <StyledHeader>
            <h1>SCORE</h1>
            <h2>Current Score: {score}</h2>
            <h2>Highscore: {highScore}</h2>
            <p>Click on the pictures, don't click on the same place twice!</p>
        </StyledHeader>
    );
}

export default Header;