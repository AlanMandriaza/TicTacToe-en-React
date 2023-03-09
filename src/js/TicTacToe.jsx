import React, { useState } from "react";
import Board from "./Board.jsx";
import Status from "./Status.jsx";
import ResetButton from "./ResetButton.jsx";

const TicTacToe = ({ player1, player2 }) => {
  // Definimos el estado inicial del tablero y de quién es el siguiente movimiento.
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  // Calculamos el ganador del juego (si lo hay).
  const winner = calculateWinner(board);

  // Manejador del click de cada cuadrado en el tablero.
  function handleClick(index) {
    // Creamos una copia del tablero actual.
    const newBoard = [...board];

    // Si hay un ganador o el cuadrado clickeado ya tiene una ficha, no hacemos nada.
    if (winner || newBoard[index]) {
      return;
    }

    // Si no, añadimos la ficha del jugador correspondiente.
    newBoard[index] = isXNext ? "X" : "O";

    // Actualizamos el estado del tablero y del jugador siguiente.
    setBoard(newBoard);
    setIsXNext(!isXNext);
  }

  // Manejador del click del botón "Reset".
  function handleReset() {
    // Reiniciamos el estado del tablero y del jugador siguiente.
    setBoard(Array(9).fill(null));
    setIsXNext(true);
  }

  return (
    <div className="container2">
      {/* Mostramos los nombres de los jugadores que están jugando. */}
      <h2>{`Playing ${player1} vs ${player2}`}</h2>
      {/* Mostramos el estado del juego (quién va ganando o el jugador siguiente). */}
      <Status winner={winner} isXNext={isXNext} player1={player1} player2={player2} />
      {/* Mostramos el tablero de juego. */}
      <div className="container">
        <Board board={board} handleClick={handleClick} />
        {/* Mostramos el botón para reiniciar el juego. */}
        <ResetButton handleReset={handleReset} />
      </div>
    </div>
  );
};

// Función para calcular el ganador del juego, si lo hay.
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
