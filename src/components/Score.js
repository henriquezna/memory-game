import { useState } from "react";

export const Score = () => {
    const [score, setScore] = useState(0);
    const [highScore, sethighScore] = useState(0);

    function updateScore(newScore){
        console.log("UPDATE SCORE");
        
        if(newScore === 0){
            console.log("YOU LOSE");
            resetScore();
            console.log(score, "YOU LOSE AFTER SCORE");
            return score;
        }else{
            setScore(score + 1);
        }

        if(score+1 > highScore){
            sethighScore(score+1);
        }   
        console.log("SKIPPED");

        return score;
    };

    const resetScore = () => {
        setScore(0);
        console.log(score, "RESET SCORE");
    }

    return [score, highScore, updateScore];
}