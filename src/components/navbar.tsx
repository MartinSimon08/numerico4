import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
  return (
    <nav className="barra-navegacion">
      <h1 className="titulo-pagina">JAREDS DE NUMERICO</h1>
      <ul className="lista-navegacion">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              "item-navegacion" + (isActive ? " activo" : "")
            }
          >
            Inicio
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/teoria"
            className={({ isActive }) =>
              "item-navegacion" + (isActive ? " activo" : "")
            }
          >
            Teoría
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/practica"
            className={({ isActive }) =>
              "item-navegacion" + (isActive ? " activo" : "")
            }
          >
            Práctica
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/euler"
            className={({ isActive }) =>
              "item-navegacion" + (isActive ? " activo" : "")
            }
          >
            Calculadora
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/tecnologias"
            className={({ isActive }) =>
              "item-navegacion" + (isActive ? " activo" : "")
            }
          >
            Tecnologías
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/grupo"
            className={({ isActive }) =>
              "item-navegacion" + (isActive ? " activo" : "")
            }
          >
            Grupo
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
