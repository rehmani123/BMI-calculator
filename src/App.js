import React from "react";
import { useMemo } from "react";
import { useState } from "react";
import "./App.css";

const App = () => {
  const [weight, setWeight] = useState("50");
  const [height, setHeight] = useState("140");

  const handleWeight = (e) => {
    setWeight(e.target.value);
  };
  const handleHeight = (e) => {
    setHeight(e.target.value);
  };

  const result = useMemo(() => {
    const calculateHeight = height / 100;
    return (weight / (calculateHeight * calculateHeight)).toFixed(1);
  }, [weight, height]);
  return (
    <div>
      <main>
        <h1 className="heading">BMI Calculator</h1>
        <div className="input-section">
          <p className="output-slider">Height: {height} cm</p>
          <input
            className="input-slider"
            type="range"
            value={height}
            min={140}
            max={220}
            onChange={handleHeight}
          />
          <p className="output-slider">weight: {weight} kg</p>
          <input
            className="input-slider"
            type="range"
            value={weight}
            step="1"
            min={50}
            max={120}
            onChange={handleWeight}
          />
        </div>

        <div className="result">
          <p>Your BMI is</p>
          <p className="output">{result}</p>
        </div>
      </main>
    </div>
  );
};

export default App;
