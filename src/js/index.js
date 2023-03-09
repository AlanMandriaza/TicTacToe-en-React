import React, { useState } from "react"; 
import ReactDOM from "react-dom"; 
import "../styles/index.css"; 
import Home from "./Home.jsx"; 
import TicTacToe from "./TicTacToe.jsx"; 

const App = () => {
  const [view, setView] = useState("home");      // Define una variable de estado "view" y una función para actualizarla "setView" con el valor inicial "home"
  const [player1, setPlayer1] = useState("");     // Define una variable de estado "player1" y una función para actualizarla "setPlayer1" con el valor inicial vacío
  const [player2, setPlayer2] = useState("");     // Define una variable de estado "player2" y una función para actualizarla "setPlayer2" con el valor inicial vacío

  function renderView() {                         // Define una función "renderView" que devuelve un componente dependiendo del valor de "view"
    if (view === "home") {                        // Si "view" es "home", devuelve el componente Home
      return (
        <Home
          handleStart={(player1, player2) => {      // Proporciona una función "handleStart" como una propiedad para el componente Home, que se llamará cuando se inicie el juego
            setPlayer1(player1);                   // Actualiza el valor de "player1" con el valor proporcionado por el usuario
            setPlayer2(player2);                  // Actualiza el valor de "player2" con el valor proporcionado por el usuario
            setView("game");                        // Actualiza el valor de "view" a "game" para renderizar el componente TicTacToe
          }}
        />
      );
    } else if (view === "game") {                       // Si "view" es "game", devuelve el componente TicTacToe
      return <TicTacToe player1={player1} player2={player2} />;
    }
  }

  return <div className="container">{renderView()}</div>; // Devuelve un elemento div que contiene el resultado de la función "renderView", que renderizará el componente apropiado en función del valor de "view"
};

ReactDOM.render(<App />, document.getElementById("app")); 
