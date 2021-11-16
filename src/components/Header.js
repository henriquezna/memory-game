import React from 'react';

function Header({score, highScore}){
    return(
        <div>
            <h1>SCORE</h1>
            <h2>{score}</h2>
            <h2>{highScore}</h2>
        </div>
    );
}

export default Header;