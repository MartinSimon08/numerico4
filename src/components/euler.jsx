import React, { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import "./euler.css"; // Usaremos el CSS actualizado de abajo

export default function EulerCalculator() {
  const [f, setF] = useState("y");
  const [y0, setY0] = useState("1"); // Es mejor manejar los inputs como strings
  const [t0, setT0] = useState("0");
  const [tEnd, setTEnd] = useState("2");
  const [h, setH] = useState("0.2");
  const [result, setResult] = useState(null);

  const handleCalculate = () => {
    // --- 1. Parsear todos los valores ---
    const p_y0 = parseFloat(y0);
    const p_t0 = parseFloat(t0);
    const p_tEnd = parseFloat(tEnd);
    const p_h = parseFloat(h);

    if (isNaN(p_y0) || isNaN(p_t0) || isNaN(p_tEnd) || isNaN(p_h)) {
      alert("Error: Todos los campos numéricos (y0, t0, t end, h) deben ser números.");
      return;
    }
    
    if (p_h <= 0) {
      alert("Error: El paso 'h' debe ser un número positivo.");
      return;
    }

    let t = p_t0;
    let y = p_y0;
    const data = [{ t, y }];
    // Damos estilo al primer paso
    const pasos = [<li key={0}><strong>y({t.toFixed(2)}) = {y.toFixed(5)} (Punto Inicial)</strong></li>];

    try {
      // --- 2. Lógica de cálculo robusta ---
      const func = new Function("t", "y", `return ${f};`);

      // --- 3. Bucle FOR basado en pasos (Mucho más preciso que 'while') ---
      const numSteps = Math.round((p_tEnd - p_t0) / p_h);
      if (numSteps <= 0 || numSteps > 5000) {
        alert("Error: El número de pasos es inválido (0 o demasiado grande). Revisa t0, t end y h.");
        return;
      }

      for (let i = 0; i < numSteps; i++) {
        const dydt = func(t, y); // Calcular la pendiente
        y = y + p_h * dydt;     // Fórmula de Euler
        t = +(t + p_h).toFixed(5); // Actualizar t y redondear
        
        data.push({ t, y });
        pasos.push(<li key={i + 1}>y({t.toFixed(2)}) = {y.toFixed(5)}</li>);
      }
      
    } catch (e) {
      // --- 4. Manejo de Errores ---
      alert("Error en la sintaxis de la Ecuación.\n\nAsegúrate de usar 't' e 'y'.\nError: " + e.message);
      return; // Detenemos la ejecución
    }

    setResult({ data, pasos });
  };

  return (
    <div className="euler-container">
      <h2>Calculadora de Euler</h2>

      <p className="instructions-note">
        <strong>Instrucciones:</strong> Usar <code>t</code> e <code>y</code> como variables.
        <br />
        Multiplicación: <code>*</code> | Exponente: <code>**</code> | División: <code>/</code> | Raíz: <code>**(1/n)</code>
      </p>

      <div className="form-row">
        <div className="form-group equation-group">
          <label>Ecuación y' =</label>
          <input value={f} onChange={(e) => setF(e.target.value)} />
        </div>
        <div className="form-group">
          <label>y0:</label>
          <input type="text" value={y0} onChange={(e) => setY0(e.target.value)} />
        </div>
        <div className="form-group">
          <label>t0:</label>
          <input type="text" value={t0} onChange={(e) => setT0(e.target.value)} />
        </div>
        <div className="form-group">
          <label>t end:</label>
          <input type="text" value={tEnd} onChange={(e) => setTEnd(e.target.value)} />
        </div>
        <div className="form-group">
          <label>h:</label>
          <input type="text" value={h} onChange={(e) => setH(e.target.value)} />
        </div>
      </div>

      <button className="calculate-btn" onClick={handleCalculate}>Calcular</button>

      {/* --- El 'result-section' AHORA ES BLANCO (ver CSS) --- */}
      {result && (
        <div className="result-section">
          <div className="chart-container">
            <ResponsiveContainer width="100%" height={350}>
              {/* --- 1. Gráfica con fondo transparente --- */}
              <LineChart data={result.data} style={{ background: 'transparent' }}>
                
                {/* --- 2. Ejes y grilla en color OSCURO para fondo blanco --- */}
                <CartesianGrid stroke="#e0e0e0" />
                <XAxis dataKey="t" stroke="#666" />
                <YAxis stroke="#666" />
                <Tooltip 
                  contentStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', border: '1px solid #ccc', borderRadius: '10px' }} 
                  itemStyle={{ color: '#333' }} 
                  labelStyle={{ color: '#000' }}
                />
                
                {/* --- 3. Línea de un color visible (amarillo-naranja) --- */}
                <Line type="monotone" dataKey="y" stroke="#ffc107" strokeWidth={3} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* --- 4. Contenedor de pasos (CSS lo hará oscuro) --- */}
          <div className="steps-container">
            <h4>Pasos de la Solución:</h4>
            <ul>
              {result.pasos}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}