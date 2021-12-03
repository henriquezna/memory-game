import React from 'react';

function Header({score, highScore}){
    return(
        <div>
            <h1>SCORE</h1>
            <h2>Current Score: {score}</h2>
            <h2>Highscore: {highScore}</h2>
        </div>
    );
}

export default Header;