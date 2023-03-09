import React, { useState } from "react";

const Home = ({ handleStart }) => {
  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");
  const [isStartDisabled, setIsStartDisabled] = useState(true);

  function handlePlayer1Change(event) {
    setPlayer1(event.target.value);
    setIsStartDisabled(!event.target.value || !player2);
  }

  function handlePlayer2Change(event) {
    setPlayer2(event.target.value);
    setIsStartDisabled(!event.target.value || !player1);
  }

  function handleStartClick() {
    handleStart(player1, player2);
  }

  return (
    <div>
      <h1>Bienvenido al juego Tic Tac Toe</h1>
      <div>
        <label htmlFor="player1">Jugador 1:</label>
        <input
          type="text"
          id="player1"
          value={player1}
          onChange={handlePlayer1Change}
        />
      </div>
      <div>
        <label htmlFor="player2">Jugador 2:</label>
        <input
          type="text"
          id="player2"
          value={player2}
          onChange={handlePlayer2Change}
        />
      </div>
      <button
        className="start btn btn-light"
        onClick={handleStartClick}
        disabled={isStartDisabled}
      >
        Comenzar
      </button>
    </div>
  );
};

export default Home;
