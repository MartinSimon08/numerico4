import React from 'react';
import './tecnologias.css';

const Tecnologias = () => {
  const tecnologias = [
    {
      icono: '💻',
      titulo: 'React',
      descripcion: 'Creacion del sitio web que desarrollamos los Jareds de Numerico'
    },
    {
      icono: '🐍',
      titulo: 'Python',
      descripcion: 'Lenguaje para cálculo operaciones numéricas'
    },
    {
      icono: '📈',
      titulo: 'Vercel',
      descripcion: 'Despliegue de la aplicación web'
    },

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
El proyecto fue implementado utilizando React para la creación de la interfaz de usuario, y Python para la calculadora
          </p>
        </div>
      </div>
    </section>
  );
};

export default Tecnologias;