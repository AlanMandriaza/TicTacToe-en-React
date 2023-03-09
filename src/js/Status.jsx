// Status.jsx
import React from "react";

const Status = ({ winner, isXNext, player1, player2 }) => {
  let statusText;

  if (winner) {
    statusText = `Game over, the winning player is${
      winner === "X" ? player1 : player2
    }`;
  } else {
    statusText = `Next player ${isXNext ? player1 : player2}`;

    
  }

  return <div className="status">{statusText}</div>;
};

export default Status;
