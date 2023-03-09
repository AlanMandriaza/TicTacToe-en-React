import React, { useState } from "react";
import Board from "./Board.jsx";
import Status from "./Status.jsx";
import ResetButton from "./ResetButton.jsx";

const TicTacToe = ({ player1, player2 }) => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const winner = calculateWinner(board);

  function handleClick(index) {
    const newBoard = [...board];

    if (winner || newBoard[index]) {
      return;
    }

    newBoard[index] = isXNext ? "X" : "O";

    setBoard(newBoard);
    setIsXNext(!isXNext);
  }

  function handleReset() {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
  }

  return (
    <div className="container2">
      <h2>{`Jugando: ${player1} vs ${player2}`}</h2>
      <Status winner={winner} isXNext={isXNext} player1={player1} player2={player2} />
      <div className="container">
        <Board board={board} handleClick={handleClick} />
        <ResetButton handleReset={handleReset} />
      </div>
    </div>
  );
};

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];

    if (
      squares[a] &&
      squares[a] === squares[b] &&
      squares[a] === squares[c]
    ) {
      return squares[a];
    }
  }

  return null;
}

export default TicTacToe;
