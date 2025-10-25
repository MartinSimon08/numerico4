import React from "react";

export default function Practica() {
  return <div>
Método de Euler (Orden 1):
 Este método es más simple para resolver ecuaciones diferenciales. Se basa en una aproximación lineal de la pendiente inicial, por lo que resulta fácil de aplicar, pero su precisión es baja y el error se acumula rápidamente con pasos grandes.
Euler con paso menor (Orden 1):
 No es un método distinto, sino una estrategia para mejorar la precisión del Euler simple disminuyendo el tamaño del paso, aunque a costa de un mayor número de cálculos.
Método de Euler Mejorado (Heun) (Orden 2):
 Corrige la limitación del Euler simple al promediar la pendiente inicial y final del intervalo. Esto reduce el error y ofrece un buen equilibrio entre exactitud y esfuerzo computacional.
Método de Runge-Kutta de cuarto orden (RK4) (Orden 4):
 Evalúa la pendiente en cuatro puntos del intervalo y combina los resultados para obtener una aproximación muy precisa. Su alta exactitud lo convierte en el método de referencia en la mayoría de las aplicaciones.








  </div>;
}
