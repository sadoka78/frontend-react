import React from "react";
import StepCounter from "./StepCounter";

export default function CounterApp() {
 
  return (
    <div style={{ display: "grid", gap: 12 }}>
      <h2 style={{ margin: 0 }}>CounterApp</h2>

      <StepCounter initialValue={0} step={1} />
      <StepCounter initialValue={10} step={5} />
    </div>
  );
}
