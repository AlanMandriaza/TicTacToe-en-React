import React, { useState } from "react";
import ReactDOM from "react-dom";
import "../styles/index.css";
import Home from "./Home.jsx";
import TicTacToe from "./TicTacToe.jsx";

const App = () => {
  const [view, setView] = useState("home");

  function renderView() {
    if (view === "home") {
      return <Home handleStart={() => setView("game")} />;
    } else if (view === "game") {
      return <TicTacToe />;
    }
  }

  return <div className="container">{renderView()}</div>;
};

ReactDOM.render(<App />, document.getElementById("app"));
