
import React from "react";

const Status = ({ winner, isXNext }) => {
  const status = winner
    ? `Fin del juego, el jugador ganador es ${winner}`
    : `Siguiente jugador: ${isXNext ? "X" : "O"}`;

  return <div className="status">{status}</div>;
};

export default Status;
