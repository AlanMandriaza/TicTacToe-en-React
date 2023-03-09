import React, { useState } from "react";
import "../styles/index.css";

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
    <div className="home-container">
      {/* Título del componente */}
      <h1>Enter player names</h1>
      {/* Contenedor del formulario */}
      <div className="form-container">
        {/* Campo de texto para jugador 1 */}
        <input
          type="text"
          id="player1"
          placeholder="Player one username"
          value={player1}
          onChange={handlePlayer1Change}
        />
        {/* Campo de texto para jugador 2 */}
        <input
          type="text"
          id="player2"
          placeholder="Player two username"
          value={player2}
          onChange={handlePlayer2Change}
        />
      </div>
      {/* Botón de inicio */}
      <button
        className="btn btn-light btn-sm"
        onClick={handleStartClick}
        disabled={isStartDisabled}
      >
        Start
      </button>
    </div>
  );
};

export default Home;
