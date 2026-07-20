import { useState } from "react";
import "./App.css";
import { useEffect } from "react";

function App() {
  const [first, setFirst] = useState(0);
  const [second, setSecond] = useState(0);
  const [result, setResult] = useState(0);
  const [operator, setOperator] = useState("+");
  const HandleEnter = () => {
    //testing the function
    console.log(first, second);
    const no1 = parseInt(first);
    const no2 = parseInt(second);
    setResult(operator === "+" ? no1 + no2 : no1 - no2);
  };
  useEffect(() => {
    const handleKeyUp = (e) => {
      if (e.key === "Enter") {
        HandleEnter();
      }
    };

    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keyup", handleKeyUp);
    };
  });

  return (
    <>
      <div>
        <h1>Calculator</h1>
        <div>
          <input
            type="number"
            value={first}
            onChange={(e) => setFirst(e.target.value)}
          />
          <input
            type="number"
            value={second}
            onChange={(e) => setSecond(e.target.value)}
          />
          <input
            type="number"
            value={result}
            onKeyUp={(e) => {
              if (e.key === "Enter") {
                // console.log(first, second); debugging
                const no1 = parseInt(first);
                const no2 = parseInt(second);
                setResult(operator === "+" ? no1 + no2 : no1 - no2);
              }
            }}
          />
          <button onClick={() => setOperator("+")}>+</button>
          <button onClick={() => setOperator("-")}>-</button>
        </div>
      </div>
    </>
  );
}

export default App;
