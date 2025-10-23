import React from "react";
import "./grupo.css";

const Grupo: React.FC = () => {
  return (
    <div className="grupo-container">
      <h1 className="grupo-titulo">Jareds de numérico</h1>
      <h3 className="grupo-subtitulo">
        Grupo 6 - Método de Relajación - Análisis Numérico - UTN FRLP
      </h3>

      <div className="grupo-card">
        <img
          src="https://ntvb.tmsimg.com/assets/assets/74092_v9_bb.jpg?w=360&h=480"
          alt="Jared Leto"
          className="grupo-imagen"
        />

        <div className="integrantes">
          <div className="integrante">
            <div className="avatar">V</div>
            <p className="nombre">Vétere Ulises</p>
            <p className="legajo">32301</p>
          </div>

          <div className="integrante">
            <div className="avatar">F</div>
            <p className="nombre">Forlini Martin Simon</p>
            <p className="legajo">32317</p>
          </div>

          <div className="integrante">
            <div className="avatar">G</div>
            <p className="nombre">Giordani Luca</p>
            <p className="legajo">33382</p>
          </div>

          <div className="integrante">
            <div className="avatar">S</div>
            <p className="nombre">Sampaoli Sergio Nicolas</p>
            <p className="legajo">31808</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grupo;
