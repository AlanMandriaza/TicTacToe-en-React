import React, { useState } from "react";
import ReactDOM from "react-dom";
import "../styles/index.css";

// Componente principal que representa el juego Tic Tac Toe
const TicTacToe = () => {
  // Array que representa el tablero del juego, inicializado con 9 elementos nulos
  const [board, setBoard] = useState(Array(9).fill(null));
  // Booleano que indica si es el turno del jugador X o del jugador O
  const [isXNext, setIsXNext] = useState(true);
  // Variable que almacena el ganador del juego, si lo hay
  const winner = calculateWinner(board);
  // Función que se llama cuando el usuario hace clic en un cuadrado del tablero
  function handleClick(index) {
    // Copia el tablero actual
    const newBoard = [...board];
    // Si ya hay un ganador o el cuadrado ya tiene una ficha, no se hace nada
    if (winner || newBoard[index]) {
      return;
    }
    // Pone la ficha del jugador correspondiente en el cuadrado clickeado
    newBoard[index] = isXNext ? "X" : "O";

    // Actualiza el tablero y cambia el turno al siguiente jugador
    setBoard(newBoard);
    setIsXNext(!isXNext);
  }

  // Función que devuelve un botón cuadrado con el valor correspondiente en el tablero
  function renderSquare(index) {
    return (
      <button className="square" onClick={() => handleClick(index)}>
        {board[index]}
      </button>
    );
  }

  // Variable que indica el estado del juego: si hay ganador o es el turno de X o de O
  const status = winner
    ? `Ganador: ${winner}`
    : `Siguiente jugador: ${isXNext ? "X" : "O"}`;

  // Renderiza el tablero del juego
  return (
    <div className="status">{status}
    <div className="container">
    
      <div className="board-row  d-flex bottom">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row d-flex bottom">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row  d-flex ">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
      </div>
    </div>
  );
};
// Función que determina el ganador del juego a partir de un array que representa el tablero
function calculateWinner(squares) {
  // Array con todas las combinaciones ganadoras posibles
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
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

ReactDOM.render(<TicTacToe />, document.getElementById("app"));
