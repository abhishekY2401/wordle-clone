import "./Letter.css";
import React, { useContext } from "react";
import { AppContext } from "../App";

const Letter = ({ letterPos, attemptVal }) => {
  const { board } = useContext(AppContext);
  const letter = board[attemptVal][letterPos];

  return (
    <div className="letter">
      <p>{letter}</p>
    </div>
  );
};

export default Letter;
