import React, { useState } from "react";
import "./styles.css";
import Counter from "./Components/Counter";

const App = () => {
  const [counts, setCount] = useState({ id: 0, value: 2 }); // Use by App

  // Increment counter1
  const add = (id) => {
    const result = counts.value + 1;
    console.log(`[add] result: ${result}`);
    setCount({ id, value: result });
  };

  console.log(`[Render] count`);

  return (
    <div className="App">
      {/* Counter1 */}
      <Counter id={counts.id} value={counts.value} onAdd={add} />
      {/* Counter2 */}
      {/* <Counter id={counterId[1]} value={count2} onAdd={add2} /> */}
    </div>
  );
};

export default App;
