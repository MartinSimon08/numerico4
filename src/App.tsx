import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar.tsx";
import Inicio from "./components/inicio.tsx";
import Teoria from "./components/teoria.tsx";
import Practica from "./components/practica.tsx";
import Tecnologias from "./components/tecnologias.tsx";
import Grupo from "./components/grupo.jsx";
import EulerCalculator from "./components/euler.jsx";

export default function App() {
  return (
    <Router>
      <Navbar />
      <main className="contenido-principal">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/teoria" element={<Teoria />} />
          <Route path="/practica" element={<Practica />} />
          <Route path="/euler" element={<EulerCalculator />} />
          <Route path="/tecnologias" element={<Tecnologias />} />
          <Route path="/grupo" element={<Grupo />} />
        </Routes>
      </main>
    </Router>
  );
}
