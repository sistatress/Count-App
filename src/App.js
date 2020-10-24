import React, { useState } from "react";
import "./styles.css";
import Counter from "./Components/Counter";

const App = () => {
  const [count, setCount] = useState(0); // Use by App
  const [count2, setCount2] = useState(0); // Use by Counter

  const counterId = [1, 2];
  console.log(`counterID: ${counterId}`);

  // Increment counter1
  const add = () => {
    const result = count + 1;
    console.log(`[add] result: ${result}`);
    setCount(result);
  };

  // Increment counter2
  const add2 = () => {
    const result = count2 + 1;
    console.log(`[add2] result: ${result}`);
    setCount2(result);
  };

  console.log(`
    [Render] count: ${count} | count2: ${count2}
  `);

  return (
    <div className="App">
      {/* Counter1 */}
      <Counter id={counterId[0]} value={count} onAdd={add} />
      {/* Counter2 */}
      <Counter id={counterId[1]} value={count2} onAdd={add2} />
    </div>
  );
};

export default App;
