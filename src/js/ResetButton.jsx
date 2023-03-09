import React from "react";

const ResetButton = ({ handleReset }) => {
return (
// Botón para resetear el juego. Recibe la función handleReset como prop, que se ejecuta al hacer clic en el botón
<button className="reset btn btn-light" onClick={handleReset}>
Reset
</button>
);
};

export default ResetButton;