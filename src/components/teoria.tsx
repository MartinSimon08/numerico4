import React from 'react';
import './teoria.css'; // Usaremos el nuevo CSS de abajo
import 'katex/dist/katex.min.css'; // Importamos el CSS de KaTeX
import { InlineMath, BlockMath } from 'react-katex';

export default function Teoria() {
  return (
    <div className="teoria-container">
      <h1>Introducción a los Métodos Numéricos</h1>

      {/* --- TARJETA 1: QUÉ ES UN PVI --- */}
      <div className="card-container">
        <h2>¿Qué es un Problema de Valor Inicial (PVI)?</h2>
        <p>
          Para resolver un problema de Ecuaciones Diferenciales Ordinarias (EDO), 
          necesitamos cuatro componentes fundamentales:
        </p>

        <ol className="lista-ordenada">
          <li>
            <strong>Una Ecuación Diferencial:</strong> Nos dice la "pendiente" de la solución en cualquier punto.
            <BlockMath math="y' = f(x, y)" />
          </li>
          <li>
            <strong>Una Condición Inicial:</strong> Es nuestro punto de partida.
            <BlockMath math="y(x_0) = y_0" />
          </li>
          <li>
            <strong>Un Dominio de Trabajo:</strong> El intervalo en el eje 'x' que queremos resolver.
            <BlockMath math="x_0 \le x \le x_f" />
          </li>
          <li>
            <strong>Un Paso 'h':</strong> El tamaño de los "saltos" que daremos para avanzar en el dominio. Se calcula como:
            <BlockMath math="h = \frac{x_f - x_0}{n}" />
            (Donde 'n' es el número de pasos que queremos dar)
          </li>
        </ol>
      </div>

      {/* --- TARJETA 2: POR QUÉ LOS NECESITAMOS --- */}
      <div className="card-container">
        <h2>¿Por qué necesitamos Métodos Numéricos?</h2>
        <p>
          En la página de práctica, vimos que la EDO <InlineMath math="y' = -y + x + 1" />
          se podía resolver de forma **analítica** (con cálculo) para obtener la solución exacta: <InlineMath math="y = x + e^{-x}" />.
        </p>
        <p>
          Pero, ¿qué pasa con una ecuación como <InlineMath math="y' = e^{-x^2}" />? 
          Esta ecuación no se puede resolver con los métodos de integración tradicionales.
        </p>
        <p>
          Los **Métodos Numéricos** existen para darnos una **aproximación** a la solución 
          cuando la solución analítica es muy difícil o imposible de encontrar.
        </p>
      </div>

      {/* --- TARJETA 3: EL MÉTODO DE EULER --- */}
      <div className="card-container">
        <h2>La Solución: Método de Euler</h2>
        <p>
          El Método de Euler es el más simple de todos. Se basa en una idea muy intuitiva:
          si no podemos seguir la "curva" de la solución, al menos podemos seguir la  
          <strong> línea tangente</strong> (la pendiente) por un pequeño tramo.
        </p>
        <p>
          Partimos del punto inicial <InlineMath math="(x_0, y_0)" />. Calculamos la pendiente 
          en ese punto (usando la EDO) y avanzamos un pequeño paso <InlineMath math="h" /> 
          en esa dirección para encontrar el siguiente punto <InlineMath math="(x_1, y_1)" />.
        </p>
                <p>
          La fórmula que usamos es la de la recta tangente:
        </p>
        <div className="formula-destacada">
          <BlockMath math="y_{n+1} = y_n + h \cdot f(x_n, y_n)" />
        </div>
      </div>

      {/* --- TARJETA 4: VENTAJAS Y DESVENTAJAS --- */}
      <div className="card-container">
        <h2>Ventajas y Desventajas de Euler</h2>
        <div className="pros-cons-grid">
          <div className="columna-pro">
            <h3>✅ Ventajas</h3>
            <ul>
              <li><strong>Simple:</strong> Es muy fácil de entender y de programar.</li>
              <li><strong>Intuitivo:</strong> La idea de seguir la pendiente es muy visual.</li>
              <li><strong>Fundacional:</strong> Es la base para entender métodos más complejos (como Runge-Kutta).</li>
            </ul>
          </div>
          <div className="columna-con">
            <h3>❌ Desventajas</h3>
            <ul>
              <li><strong>Impreciso:</strong> Acumula mucho error (error de truncamiento) en cada paso.</li>
              <li><strong>Ineficiente:</strong> Para obtener una buena precisión, se necesita un paso <InlineMath math="h" /> muy pequeño, lo que requiere muchos cálculos.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* --- TARJETA 5: CONCLUSIÓN --- */}
      
    </div>
  );
}