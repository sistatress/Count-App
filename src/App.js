import React, { useState } from "react";
import "./styles.css";
import Counter from "./Components/Counter";

const App = () => {
  const [counters, setCounts] = useState([{ id: 0, value: 0 },{ id: 1, value: 0 }, { id: 2, value: 0 }]); // Use by App

  // Increment counter
  const add = (id,value) => {
    
    const result = value + 1;
    // Find the counter 
    const counterIndex = counters.findIndex(counterElement => counterElement.id === id)
    // Copy of the counters array
    const newCounters = [...counters]
    // Udate the counter value
    newCounters[counterIndex] = {...newCounters[counterIndex], value:result}
    // Set counters state
    setCounts(newCounters)
  };

  const showCounts = (element, index) => {
    //console.log(`element id: ${element.id} value: ${element.value} index: ${index}`)
    return (
      <div key={index}>
        <Counter id={element.id} value={element.value} onAdd={add} />
      </div>
    )
  }
  console.log(`[Render App]`);

  return (
    <div className="App">
      {/* Counters */}
      {counters.map(showCounts)}
    </div>
  );
};

export default App;
