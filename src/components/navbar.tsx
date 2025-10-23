import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
  return (
    <nav className="barra-navegacion">
      <h1 className="titulo-pagina">JAREDS DE NUMERICO</h1>
      <ul className="lista-navegacion">
        <li><NavLink to="/">Inicio</NavLink></li>
        <li><NavLink to="/teoria">Teoría</NavLink></li>
        <li><NavLink to="/practica">Práctica</NavLink></li>
        <li><NavLink to="/tecnologias">Tecnologías</NavLink></li>
        <li><NavLink to="/grupo">Grupo</NavLink></li>
      </ul>
    </nav>
  );
}
