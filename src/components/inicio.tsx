import React from "react";
import "./inicio.css";

export default function Inicio() {
  return (
    <div className="inicio-container">
      <div className="inicio-contenido">
        <h1>Bienvenido a JAREDS DE NUMERICO</h1>
        <p>
          Aquí encontrarás teoría, práctica y herramientas como la calculadora de
          Euler para aprender de manera interactiva y visual.
        </p>
        <div className="inicio-botones">
          <a href="/teoria" className="btn">
            Ver Teoría
          </a>
          <a href="/practica" className="btn">
            Ir a Práctica
          </a>
          <a href="/euler" className="btn">
            Calculadora Euler
          </a>
        </div>
      </div>
      <div className="inicio-imagen">
        <img
          src="https://www.clarin.com/2025/10/10/vnAhe-tC8_720x0__1.jpg"
          alt="Matemática"
        />
      </div>
      
    </div>
  );
}
