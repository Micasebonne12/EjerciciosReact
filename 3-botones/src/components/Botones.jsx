import React from "react";
import "../App.css";
import { useState } from "react";

const Botones = () => {
    const [buttonNumber, setButtonNumber] = useState(0)
    const [buttonText, setButtonText] = useState('Cero');

return(
    <>
    <p className="text">{buttonNumber} - {buttonText}</p>
    <div className="contenedorBotones">
        <button onClick={() => {{setButtonNumber(1)} {setButtonText("Uno")}}} className="boton">1</button>
        <button onClick={() => {{setButtonNumber(2)} {setButtonText("Dos")}}} className="boton">2</button>
        <button onClick={() => {{setButtonNumber(3)} {setButtonText("Tres")}}} className="boton">3</button>
    </div>
    </>
);
};


export default Botones;

