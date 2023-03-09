// Status.jsx
import React from "react";

const Status = ({ winner, isXNext, player1, player2 }) => {
  let statusText;

  if (winner) {
    statusText = `Fin del juego, el jugador ganador es ${
      winner === "X" ? player1 : player2
    }`;
  } else {
    statusText = `Siguiente jugador: ${isXNext ? player1 : player2}`;

    
  }

  return <div className="status">{statusText}</div>;
};

export default Status;
