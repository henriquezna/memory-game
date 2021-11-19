import React from "react";
import './App.css';
import Board from './components/Board.js';
import Header from './components/Header.js';
import { Score } from "./components/Score";

function App() {
  const [score, highScore, updateScore] = Score();

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