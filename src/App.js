import React, { useState } from "react";
import "./App.css";
import Board from "./components/Board";
import Keyboard from "./components/Keyboard";
import { createContext } from "react";
import { defaultBoard } from "./components/Words";

export const AppContext = createContext();

function App() {
  const [board, setBoard] = useState(defaultBoard);
  const [currAttempt, setCurrAttempt] = useState({ attempt: 0, letterPos: 0 });

  return (
    <div className="App">
      <nav>
        <h1>Wordle</h1>
        <hr />
      </nav>
      <div className="board-key">
        <AppContext.Provider
          value={{ board, setBoard, currAttempt, setCurrAttempt }}
        >
          <Board />
          <Keyboard />
        </AppContext.Provider>
      </div>
    </div>
  );
}

export default App;
