import React, { useState, useEffect } from "react";
import './App.css';
import Board from './components/Board.js';
import Header from './components/Header.js';

function App() {
  const [score, setScore] = useState(0);
  const [highScore, sethighScore] = useState(0);

  function updateScore(newScore){
    if(score+1 > highScore){
      console.log("YEET");
      sethighScore(score+1);
    }
    
    if(newScore === 0){
      setScore(0);
      return;
    }

    setScore(score + 1);
  };

  useEffect(() =>{
    console.log(score, "APP USEEFFECT");
  });

  return (
    <div className="App">
      <header className="App-header">
        <Header score={score} highScore={highScore} />
      </header>
      <Board updateScore={updateScore} />
    </div>
  );
}

export default App;
