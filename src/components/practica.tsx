import React, { useState, useMemo } from 'react';

// 1. Importaciones para la gráfica
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from 'recharts';

// 2. Importaciones para las fórmulas (KaTeX)
import 'katex/dist/katex.min.css'; 
import { InlineMath, BlockMath } from 'react-katex';

// 3. Importación del CSS local
import './practica.css'; 

// Interfaz para los datos de la tabla
interface EulerPoint {
  n: number;
  x: number;
  y: number;
}

// --- CONSTANTES Y LÓGICA DEL PROBLEMA ---
const F = (x: number, y: number) => -y + x + 1;
const x0 = 0;
const y0 = 1;
const xFinal = 1;
const exactSolution = (x: number) => x + Math.exp(-x);

// --- CÁLCULO ESTÁTICO (para la explicación h=0.1) ---
const staticEulerResults = () => {
  const points: EulerPoint[] = [];
  const h_static = 0.1;
  const numSteps_static = 10;
  let x = x0;
  let y = y0;

  points.push({ n: 0, x, y });

  for (let i = 0; i < numSteps_static; i++) {
    const y_next = y + h_static * F(x, y);
    const x_next = x + h_static;
    x = parseFloat(x_next.toFixed(4));
    y = y_next;
    points.push({ n: i + 1, x, y });
  }
  return points;
};
const h01_results = staticEulerResults();
// Calculamos el error final para la conclusión de la Sección 3
const finalExactVal = exactSolution(h01_results[h01_results.length - 1].x);
const finalApproxVal = h01_results[h01_results.length - 1].y;
const finalErrorPerc = (Math.abs(finalExactVal - finalApproxVal) / finalExactVal) * 100;


// --- COMPONENTE PRINCIPAL ---
const PracticaEuler: React.FC = () => {
  // --- ESTADO PARA LA PARTE INTERACTIVA ---
  const [numSteps, setNumSteps] = useState(4); 

  const h_interactive = useMemo(() => {
    return (xFinal - x0) / numSteps;
  }, [numSteps]);

  const interactiveEulerResults = useMemo(() => {
    const points: EulerPoint[] = [];
    let x = x0;
    let y = y0;
    points.push({ n: 0, x, y });

    for (let i = 0; i < numSteps; i++) {
      const y_next = y + h_interactive * F(x, y);
      const x_next = x + h_interactive;
      x = parseFloat(x_next.toFixed(4)); 
      y = y_next;
      points.push({ n: i + 1, x, y });
    }
    return points;
  }, [numSteps, h_interactive]);

  const chartData = useMemo(() => {
    return interactiveEulerResults.map(point => ({
      x: point.x,
      'Aprox. Euler': parseFloat(point.y.toFixed(5)),
      'Solución Exacta': parseFloat(exactSolution(point.x).toFixed(5)),
    }));
  }, [interactiveEulerResults]); 

  
  // --- RENDERIZADO DEL COMPONENTE ---
  return (
    <div className="practica-container">
      <h1>Método de Euler Interactivo</h1>
      
      {/* --- SECCIÓN 1: EL PROBLEMA --- */}
      <div className="card-container problem-statement">
        <h2>Sección 1: El Problema a Resolver (Ejercicio 2a)</h2>
        <p>
          Dada la Ecuación Diferencial Ordinaria (EDO):
          <strong> <InlineMath math="y' = -y + x + 1" /> </strong>
        </p>
        <p>
          Con la condición inicial: 
          <strong> <InlineMath math="y(0) = 1" /> </strong>
        </p>
        <p>
          Aproximar la solución en el intervalo 
          <strong> <InlineMath math="[0, 1]" /> </strong> con un paso <strong><InlineMath math="h = 0.1"/></strong>.
        </p>
      </div>

      {/* --- SECCIÓN 2: SOLUCIÓN ANALÍTICA (DESARROLLO COMPLETO) --- */}
      <div className="card-container step-by-step-container">
        <h2>Sección 2: Solución Analítica (Exacta)</h2>
        <p>
          Antes de usar un método numérico, veamos si podemos resolver la ecuación de forma exacta.
          La EDO <InlineMath math="y' = -y + x + 1" /> es una <strong>Ecuación Lineal de Primer Orden</strong>.
        </p>
        <p>
          La reordenamos a su forma estándar <InlineMath math="y' + P(x)y = Q(x)" />:
        </p>
        <div className="step-calculation">
          <BlockMath math="y' + y = x + 1" />
        </div>
        <p>
          Identificamos <InlineMath math="P(x) = 1" /> y <InlineMath math="Q(x) = x + 1" />.
          Calculamos el <strong>Factor Integrante</strong> <InlineMath math="\mu(x)" />:
        </p>
        <div className="step-calculation">
          <BlockMath math="\mu(x) = e^{\int P(x) dx} = e^{\int 1 dx} = e^x" />
        </div>
        <p>
          Multiplicamos la EDO por el factor integrante <InlineMath math="e^x" />:
        </p>
        <div className="step-calculation">
          <BlockMath math="e^x (y' + y) = e^x (x + 1)" />
          <BlockMath math="\frac{d}{dx}(e^x \cdot y) = xe^x + e^x" />
        </div>
        <p>
          Integramos ambos lados (usando integración por partes para <InlineMath math="xe^x" />):
        </p>
        <div className="step-calculation">
          <BlockMath math="\int \frac{d}{dx}(e^x \cdot y) dx = \int (xe^x + e^x) dx" />
          <BlockMath math="e^x \cdot y = (xe^x - e^x) + e^x + C" />
          <BlockMath math="e^x \cdot y = xe^x + C" />
        </div>
        <p>
          Despejamos <InlineMath math="y" /> para obtener la <strong>solución general</strong>:
        </p>
        <div className="step-calculation">
          <BlockMath math="y(x) = \frac{xe^x + C}{e^x} = x + Ce^{-x}" />
        </div>
        <p>
          Finalmente, usamos la condición inicial <InlineMath math="y(0) = 1" /> para hallar <InlineMath math="C" />:
        </p>
        <div className="step-calculation">
          <BlockMath math="1 = 0 + Ce^{-0} \implies 1 = C \cdot 1 \implies C = 1" />
        </div>
        <p className="step-conclusion">
          Sustituimos <InlineMath math="C=1" /> y obtenemos la <strong>Solución Particular (Exacta)</strong>, que es la línea verde en nuestras gráficas:
        </p>
        <div className="formula-euler">
          <BlockMath math="y(x) = x + e^{-x}" />
        </div>
      </div>

      {/* --- SECCIÓN 3: RESOLUCIÓN NUMÉRICA (DESARROLLO COMPLETO) --- */}
      <div className="card-container step-by-step-container">
        <h2>Sección 3: Solución Numérica (Método de Euler con <InlineMath math="h=0.1" />)</h2>
        <p>
          Como vimos, la solución exacta requiere cálculo avanzado. El método de Euler nos da una
          aproximación usando solo aritmética simple, siguiendo la fórmula:
        </p>
        <div className="formula-euler">
          <BlockMath math="y_{n+1} = y_n + h \cdot f(x_n, y_n)" />
        </div>
        <p>
          Nuestra función de pendiente es <InlineMath math="f(x, y) = -y + x + 1" />.
        </p>
        
        <div className="step-calculation">
          <strong>Iteración 0 (n=0):</strong>
          <ul>
            <li>Punto inicial: <InlineMath math="(x_0, y_0) = (0, 1)" /></li>
            <li>Calculamos la pendiente: <InlineMath math="f(0, 1) = -1 + 0 + 1 = 0" /></li>
            <li>Calculamos <InlineMath math="y_1" />:</li>
            <BlockMath math="y_1 = y_0 + h \cdot f(x_0, y_0)" />
            <li><InlineMath math="y_1 = 1.00000 + 0.1 \cdot (0) = 1.00000" /></li>
            <li>Nuevo punto: <InlineMath math="(x_1, y_1) = (0.1, 1.00000)" /></li>
          </ul>
        </div>

        <div className="step-calculation">
          <strong>Iteración 1 (n=1):</strong>
          <ul>
            <li>Punto actual: <InlineMath math="(x_1, y_1) = (0.1, 1.00000)" /></li>
            <li>Calculamos la pendiente: <InlineMath math="f(0.1, 1.0) = -1.0 + 0.1 + 1 = 0.1" /></li>
            <li>Calculamos <InlineMath math="y_2" />:</li>
            <BlockMath math="y_2 = y_1 + h \cdot f(x_1, y_1)" />
            <li><InlineMath math="y_2 = 1.00000 + 0.1 \cdot (0.1) = 1.01000" /></li>
            <li>Nuevo punto: <InlineMath math="(x_2, y_2) = (0.2, 1.01000)" /></li>
          </ul>
        </div>

        <p className="step-conclusion">
          ...y así sucesivamente. Si continuamos este proceso 10 veces (hasta <InlineMath math="x=1.0" />), obtenemos la siguiente tabla de resultados:
        </p>

        <div className="table-container static-table">
          <h4>Tabla de Resultados (con <InlineMath math="h=0.1" />)</h4>
          <table>
            <thead>
              <tr>
                <th><InlineMath math="n" /></th>
                <th><InlineMath math="x_n" /></th>
                <th><InlineMath math="y_n" /> (Aprox.)</th>
                <th className="header-error">Error (%)</th>
              </tr>
            </thead>
            <tbody>
              {h01_results.map((point) => {
                const exactVal = exactSolution(point.x);
                const errorPerc = (Math.abs(exactVal - point.y) / exactVal) * 100;
                return (
                  <tr key={point.n}>
                    <td>{point.n}</td>
                    <td>{point.x.toFixed(1)}</td>
                    <td>{point.y.toFixed(5)}</td>
                    <td className="cell-error">{errorPerc.toFixed(2)}%</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <p className="step-conclusion">
          Al final del intervalo (en <InlineMath math="x=1.0" />), la aproximación tiene un error
          del <strong>{finalErrorPerc.toFixed(2)}%</strong>.
        </p>
      </div>

      {/* --- SECCIÓN 4: DEFINICIÓN DE ERROR --- */}
      <div className="card-container step-by-step-container">
        <h2>Sección 4: Cuantificando el Error</h2>
        <p>
          Para medir qué tan "lejos" está nuestra aproximación de la solución real, usamos
          el <strong>Error Porcentual</strong>.
        </p>
        <div className="step-calculation">
          <strong>Error Absoluto:</strong> Es la diferencia directa.
          <BlockMath math="E_{abs} = |y_{exacto} - y_{aprox}|" />
        </div>
        <div className="step-calculation">
          <strong>Error Porcentual:</strong> Es el error en relación al valor verdadero.
          <BlockMath math="E_{porc} = \left( \frac{E_{abs}}{y_{exacto}} \right) \times 100" />
        </div>
      </div>


      {/* --- SECCIÓN 5: HERRAMIENTA INTERACTIVA --- */}
      <div className="card-container interactive-container">
        <h2>Sección 5: Herramienta Interactiva (Error vs. Pasos)</h2>
        <p>
          Ahora puedes ver cómo el <strong>Error Porcentual</strong> cambia drásticamente
          al modificar el número de pasos <InlineMath math="n" />.
          Observa la última columna de la tabla.
        </p>
        
        {/* Controles del slider */}
        <div className="controls">
          <label htmlFor="n-slider">
            Ajusta el número de pasos (<strong>n</strong>): <strong>{numSteps}</strong>
          </label>
          <input
            type="range"
            id="n-slider"
            min="1"
            max="20"
            step="1"
            value={numSteps}
            onChange={(e) => setNumSteps(parseInt(e.target.value))}
          />
          <p>
            Tamaño del paso (<strong>h</strong>) resultante: <strong>{h_interactive.toFixed(4)}</strong>
          </p>
        </div>

        {/* Grid Interactivo (Tabla + Gráfica) */}
        <div className="interactive-grid">
          
          <div className="table-container interactive-table">
            <h4>Datos Calculados (n={numSteps})</h4>
            <table>
              <thead>
                <tr>
                  <th><InlineMath math="n" /></th>
                  <th><InlineMath math="x_n" /></th>
                  <th><InlineMath math="y_n" /> (Aprox.)</th>
                  <th className="header-error">Error (%)</th>
                </tr>
              </thead>
              <tbody>
                {interactiveEulerResults.map((point) => {
                  const exactVal = exactSolution(point.x);
                  const errorPerc = exactVal === 0 ? 0 : (Math.abs(exactVal - point.y) / exactVal) * 100;
                  return (
                    <tr key={point.n}>
                      <td>{point.n}</td>
                      <td>{point.x.toFixed(3)}</td>
                      <td>{point.y.toFixed(5)}</td>
                      <td className="cell-error">{errorPerc.toFixed(2)}%</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          
          <div className="chart-container">
            <h4>Gráfica de Aproximación</h4>
            <ResponsiveContainer width="100%" height={400}>
              <LineChart
                data={chartData}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis 
                  dataKey="x" 
                  type="number" 
                  domain={[x0, xFinal]}
                  label={{ value: 'x', position: 'insideBottomRight', offset: -5 }}
                />
                <YAxis 
                  type="number"
                  domain={[0.8, 1.6]} 
                  label={{ value: 'y', position: 'insideLeft', angle: -90, offset: 0 }}
                />
                <Tooltip formatter={(value: number) => value.toFixed(5)} />
                <Legend />
                <Line
                  // Sin type="monotone" para que se vea "quebrada"
                  dataKey="Aprox. Euler"
                  stroke="#007bff" 
                  strokeWidth={2}
                  dot={{ r: 4 }}
                />
                <Line
                  type="monotone" // Con type="monotone" para que se vea "suave"
                  dataKey="Solución Exacta"
                  stroke="#28a745" 
                  strokeWidth={2}
                  strokeDasharray="5 5"
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div> 
      </div> 
    </div>
  );
};

export default PracticaEuler;