import React, { useState, useEffect } from "react";
import "./styles.css";

const App = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  // App Effects
  useEffect(() => {
    console.log(`Effect will run after every render`);
  });

  useEffect(() => {
    console.log(`Effect will run just once, after the first render`);
  }, []);

  useEffect(() => {
    console.log(`Effect will run only when count changes`);
  }, [count]);

  useEffect(() => {
    console.log(`Effect will run when count OR count2 change`);
  }, [count, count2]);

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
      <h1>Count App</h1>
      <p>Count state: {count}</p>
      <button onClick={add}>+</button>
      <p>Count state: {count2}</p>
      <button onClick={add2}>+</button>
    </div>
  );
};

export default App;
