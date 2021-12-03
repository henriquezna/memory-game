import { useState } from "react";

export const Score = () => {
    const [score, setScore] = useState(0);
    const [highScore, sethighScore] = useState(0);

    function updateScore(newScore){
        console.log("UPDATE SCORE");
        
        if(newScore === 0){
            resetScore();
            return score;
        }else{
            setScore(score + 1);
        }

        if(score+1 > highScore){
            sethighScore(score+1);
        }   

        return score;
    };

    const resetScore = () => {
        setScore(0);
    }

    return [score, highScore, updateScore];
}