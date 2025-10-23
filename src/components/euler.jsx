import React, { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import "./euler.css";

export default function EulerCalculator() {
  const [f, setF] = useState("y");
  const [y0, setY0] = useState(1);
  const [t0, setT0] = useState(0);
  const [tEnd, setTEnd] = useState(2);
  const [h, setH] = useState(0.2);
  const [result, setResult] = useState(null);

  const handleCalculate = () => {
    let t = parseFloat(t0);
    let y = parseFloat(y0);
    const data = [{ t, y }];
    const pasos = [`y(${t}) = ${y}`];

    const func = new Function("t", "y", `return ${f};`);

    while (t < tEnd) {
      y = y + h * func(t, y);
      t = +(t + parseFloat(h)).toFixed(5);
      data.push({ t, y });
      pasos.push(`y(${t}) = ${y.toFixed(5)}`);
    }

    setResult({ data, pasos });
  };

  return (
    <div className="euler-container">
      <h2>Calculadora de Euler</h2>

      <div className="form-row">
        <div className="form-group">
          <label>Ecuación y' =</label>
          <input value={f} onChange={(e) => setF(e.target.value)} />
        </div>
        <div className="form-group">
          <label>y0:</label>
          <input type="number" value={y0} onChange={(e) => setY0(e.target.value)} />
        </div>
        <div className="form-group">
          <label>t0:</label>
          <input type="number" value={t0} onChange={(e) => setT0(e.target.value)} />
        </div>
        <div className="form-group">
          <label>t end:</label>
          <input type="number" value={tEnd} onChange={(e) => setTEnd(e.target.value)} />
        </div>
        <div className="form-group">
          <label>h:</label>
          <input type="number" value={h} onChange={(e) => setH(e.target.value)} />
        </div>
      </div>

      <button className="calculate-btn" onClick={handleCalculate}>Calcular</button>

      {result && (
        <div className="result-section">
          <div className="chart-container">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={result.data}>
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="t" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="y" stroke="#fff" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="steps-container">
            <ul>
              {result.pasos.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
