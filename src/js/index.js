import "../styles/index.css";
import React, { useState } from "react";
import ReactDOM from "react-dom";

const Semaforo = () => {
  const [brillar, setBrillar] = useState({ rojo: false, amarillo: false, verde: false });

  const handleClick = (color) => {
    setBrillar((prevState) => ({
      rojo: color === "rojo" ? true : false,
      amarillo: color === "amarillo" ? true : false,
      verde: color === "verde" ? true : false,
    }));
  };

  return (
    <>
    <div className="semaforo">
      <div
        className={`luz rojo ${brillar.rojo ? "brillar" : ""}`}
        onClick={() => handleClick("rojo")}
      ></div>
      <div
        className={`luz amarillo ${brillar.amarillo ? "brillar" : ""}`}
        onClick={() => handleClick("amarillo")}
      ></div>
      <div
        className={`luz verde ${brillar.verde ? "brillar" : ""}`}
        onClick={() => handleClick("verde")}
      ></div>
       
     
    </div>
    <div className="pilar"></div>
    </>
  );
};

ReactDOM.render(<Semaforo />, document.getElementById("app"));
