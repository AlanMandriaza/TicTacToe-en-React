import React, { useState } from "react";
import "../styles/index.css";
import ReactDOM from "react-dom";
import Tablero from './tablero.jsx';

const App = () => {
  const [turn, setTurn] = useState('X');
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [score, setScore] = useState({
    X: 0,
    O: 0,
  });

  return (
    <div className="container">
      <Tablero squares={squares} turn={turn} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
