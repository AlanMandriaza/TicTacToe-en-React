import React from "react";

const Home = ({ handleStart }) => {
  return (
    <div>
      <h1>Bienvenido al juego Tic Tac Toe</h1>
      <p>Haz clic en el botón para comenzar</p>
      <button className="start btn btn-light" onClick={handleStart}>
        Comenzar
      </button>
    </div>
  );
};

export default Home;
