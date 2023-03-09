import React, { useState } from "react";
import ReactDOM from "react-dom";
import "../styles/index.css";
import Home from "./Home.jsx";
import TicTacToe from "./TicTacToe.jsx";

const App = () => {
  const [view, setView] = useState("home");
  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");

  function renderView() {
    if (view === "home") {
      return (
        <Home
          handleStart={(player1, player2) => {
            setPlayer1(player1);
            setPlayer2(player2);
            setView("game");
          }}
        />
      );
    } else if (view === "game") {
      return <TicTacToe player1={player1} player2={player2} />;
    }
  }

  return <div className="container">{renderView()}</div>;
};

ReactDOM.render(<App />, document.getElementById("app"));
