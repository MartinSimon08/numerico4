import React from 'react';
import './tecnologias.css';

const Tecnologias = () => {
  const tecnologias = [
    {
      icono: '💻',
      titulo: 'Next.js y v0',
      descripcion: 'Framework de react principal para implementación de la solución web y la utilización de v0 como IA complementaria'
    },
    {
      icono: '📊',
      titulo: 'NumPy',
      descripcion: 'Biblioteca para cálculo operaciones numéricas'
    },
    {
      icono: '📈',
      titulo: 'Matplotlib y panda',
      descripcion: 'Visualización de datos y generación de gráficos'
    },
    {
      icono: '🔢',
      titulo: 'katex',
      descripcion: 'Herramienta para el ploteo de valores numéricos'
    }
  ];

  return (
    <section className="seccion-tecnologias">
      <div className="contenedor-tecnologias">
        <div className="encabezado-tecnologias">
          <h2 className="titulo-principal">Tecnologías Utilizadas</h2>
          <p className="subtitulo">
            Herramientas y bibliotecas empleadas en el desarrollo del proyecto
          </p>
        </div>

        <div className="grilla-tarjetas">
          {tecnologias.map((tech, index) => (
            <div key={index} className="tarjeta-tecnologia">
              <div className="contenedor-icono">
                <span className="icono">{tech.icono}</span>
              </div>
              <h3 className="titulo-tecnologia">{tech.titulo}</h3>
              <p className="descripcion-tecnologia">{tech.descripcion}</p>
            </div>
          ))}
        </div>

        <div className="seccion-implementacion">
          <h3 className="titulo-implementacion">Implementación</h3>
          <p className="texto-implementacion">
            El proyecto combina teoría matemática rigurosa con implementación práctica en Python, utilizando
            bibliotecas especializadas para garantizar precisión numérica y visualizaciones claras que facilitan la
            comprensión del método de mínimos cuadrados.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Tecnologias;