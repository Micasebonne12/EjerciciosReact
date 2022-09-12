import React from "react";
import '../App.css';
import { useState } from "react";

const Contador = () => {
    const [cantidad, setCantidad] = useState(0);

  const increment = () => {
      setCantidad(count => count + 1);
  };

  const decrement = () => {
      setCantidad(count => count - 1);
  }

  return (
    <div className="contenedorBoton">
      <button onClick={increment} className="botonCount">
        Sumar
      </button>
      <p>{cantidad}</p>
      <button onClick={decrement} className="botonCount">
        Restar
      </button>
    </div>
  );
};


export default Contador;
