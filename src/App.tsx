import React, { useState, useEffect } from "react";
import "./App.css";

const App: React.FC = () => {
  const [load, setLoad] = useState<number>(0);

  useEffect(() => {
    const int: NodeJS.Timeout = setInterval(() => {
      setLoad((currentLoad: number) => {
        if (currentLoad > 99) {
          clearInterval(int);
        }
        return currentLoad + 1;
      });
    }, 70);
    return () => clearInterval(int);
  }, []);

  const scale = (
    num: number,
    in_min: number,
    in_max: number,
    out_min: number,
    out_max: number
  ) => ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;

  return (
    <div className="App">
      <section
        className="bg"
        style={{ filter: `blur(${scale(load, 0, 100, 30, 0)}px)` }}
      />
      <div
        className="loading-text"
        style={{ opacity: scale(load, 0, 100, 1, 0) }}
      >
        {load}%
      </div>
    </div>
  );
};

export default App;
