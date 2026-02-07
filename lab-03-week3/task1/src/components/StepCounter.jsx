import React, { useMemo, useState } from "react";

export default function StepCounter({ initialValue = 0, step = 1 }) {
  const [count, setCount] = useState(initialValue);
  const [history, setHistory] = useState([]);
  const [operationCount, setOperationCount] = useState(0);

  const lastFive = useMemo(() => {
    const start = Math.max(0, history.length - 5);
    return history.slice(start);
  }, [history]);

  const applyChange = (delta) => {
    const next = count + delta;

    setCount(next);
    setHistory((prev) => [...prev, next]);
    setOperationCount((prev) => prev + 1);
  };

  const handleReset = () => {
    setCount(initialValue);
    setHistory([]);
    setOperationCount(0);
  };

  return (
    <div style={{ border: "1px solid #ddd", padding: 12, borderRadius: 10 }}>
      <h3 style={{ marginTop: 0 }}>StepCounter</h3>

      <p>
        <b>Current count:</b> {count}
      </p>

      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
        <button onClick={() => applyChange(step)}>Increment (+{step})</button>
        <button onClick={() => applyChange(-step)}>Decrement (-{step})</button>
        <button onClick={handleReset}>Reset</button>
      </div>

      <hr />

      <p>
        <b>Total operations:</b> {operationCount}
      </p>

      <p style={{ marginBottom: 6 }}>
        <b>Last 5 history values:</b>
      </p>

      {lastFive.length === 0 ? (
        <p style={{ marginTop: 0, color: "#666" }}>No history yet.</p>
      ) : (
        <ul style={{ marginTop: 0 }}>
          {lastFive.map((v, idx) => (
            <li key={`${v}-${idx}`}>{v}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
