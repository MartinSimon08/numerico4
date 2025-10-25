import React from "react";
import "./teoria.css";

export default function Teoria() {
  return (
    <div className="teoria-container">
      <h1>Métodos numéricos para la resolución de ecuaciones diferenciales ordinarias en problemas de valor inicial</h1>

      <h2>1) Ecuación diferencial</h2>
      <p>
        Una ecuación diferencial del tipo:
      </p>

      <div className="formula">
        <code>y' = f(x, y)</code>
      </div>

      <p>
        Es una ecuación que varía respecto de “x” y que varía respecto de “y” 
        (que a su vez depende de la variación en “x” también).
      </p>

      <h2>2) Condición inicial</h2>
      <p>
        Una condición inicial que debe satisfacer la solución (o varias condiciones
        que se refieren al mismo valor de “x” si la ecuación es de orden superior):
      </p>

      <div className="formula">
        <code>y(x₀) = y₀</code>
      </div>

      <h2>3) Dominio de trabajo</h2>
      <p>
        Un dominio de trabajo en el eje de las “x” de la forma: X0=Valor Inicial, Xf= Valor Final
      </p>

      <div className="formula">
        <code>X0 ≤ x ≤ Xf</code>
      </div>

      <h2>4) Paso “h”</h2>
      <p>
        Un paso “h” para recorrer el dominio de trabajo de manera que:
      </p>

      <div className="formula">
        <code>h = (Xf - X0) / n</code>
      </div>

      <h2>💡 Info del Método de Euler (del profe)</h2>
      <p>
        Nuestro algoritmo es:
      </p>

      <div className="formula">
        <code>yₙ₊₁ = yₙ + h · f(xₙ, yₙ)</code>
      </div>

      <p>
        El método de Euler parte de la idea de la pendiente tangente:
        sabemos que la derivada <code>f(x, y)</code> representa la pendiente de la
        curva solución en el punto actual <code>(x, y)</code>.
      </p>

      <p>
        Si avanzamos un pequeño paso <code>h</code> en la dirección de esa pendiente,
        obtenemos una aproximación del nuevo valor de <code>y</code>:
      </p>

      <div className="formula">
        <code>yₙ₊₁ = yₙ + h · f(xₙ, yₙ)</code>
      </div>

      <p>
        Luego actualizamos:
      </p>

      <div className="formula">
        <code>xₙ₊₁ = xₙ + h</code>
      </div>

      <p>
        Y repetimos el proceso para avanzar en el dominio definido.
      </p>

      <div className="resumen">
        <h3>📋 Resumen y cosas a agregar:</h3>
        <ul>
          <li>El método de Euler usa una aproximación paso a paso.</li>
          <li>Se basa en la pendiente de la curva solución en cada punto.</li>
          <li>La precisión mejora al disminuir el tamaño de <code>h</code>.</li>
          <li>Es el método más simple y base para otros métodos más avanzados.</li>
        </ul>
      </div>
    </div>
  );
}
