import React from "react";

const Board = ({ board, handleClick }) => {
  // Función que devuelve un botón cuadrado con el valor correspondiente en el tablero
  function renderSquare(index) {
    return (
      <button className="square" onClick={() => handleClick(index)}>
        {board[index]}
      </button>
    );
  }

  // Renderiza el tablero del juego
  return (
    <div>
      <div className="board-row  d-flex bottom up">
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
  );
};

export default Board;
