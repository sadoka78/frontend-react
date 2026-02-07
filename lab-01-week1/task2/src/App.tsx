import { useState } from "react";
import Counter from "./Counter";
import "./App.css";

export default function App() {
  const [isHighlighted, setIsHighlighted] = useState<boolean>(false);

  const toggleHighlight = () => {
    setIsHighlighted((prev) => !prev);
  };

  return (
    <div className="container">
      <h2>Declarative UI (React)</h2>

      <button onClick={toggleHighlight}>Toggle Highlight</button>

      <p className={isHighlighted ? "highlight" : ""}>
        This paragraph is controlled declaratively using React state.
      </p>

      <hr />

      <Counter />
    </div>
  );
}
