import React, { useState } from "react";
import "./styles.css";
import Counter from "./Components/Counter";

const App = () => {
  const [counters, setCounts] = useState([
    { id: 0, value: 0 },
    { id: 1, value: 0 },
    { id: 2, value: 0 }
  ]);

  /*  Update counter value  */

  const updateCounter = (id, value, result) => {
    // Find the counter
    const counterIndex = counters.findIndex(
      (counterElement) => counterElement.id === id
    );
    // Copy of the counters array
    const newCounters = [...counters];

    // Udate the counter value
    newCounters[counterIndex] = { ...newCounters[counterIndex], value: result };

    // Set counters state
    setCounts(newCounters);
  };

  /*  Update counter value  */

  const deleteCounter = (id) => {
    // Copy of the counters array
    const countersCopy = [...counters];

    // Delete counter
    const newCounters = countersCopy.filter(
      (counterElement) => counterElement.id !== id
    );

    // Set counters state
    setCounts(newCounters);
  };

  /*  Increment counter  */

  const add = (id, value) => {
    const result = ++value;
    updateCounter(id, value, result);
  };

  /*  Decrement counter  */

  const subtract = (id, value) => {
    const result = --value;
    updateCounter(id, value, result);
  };

  const showCounters = (element, index) => {
    //console.log(`element id: ${element.id} value: ${element.value} index: ${index}`)
    return (
      <div key={index}>
        <Counter
          id={element.id}
          value={element.value}
          onAdd={add}
          onSubtract={subtract}
          onDelete={deleteCounter}
        />
      </div>
    );
  };

  /*  Add a new counter to the App  */
  const handleClick = () => {
    const counterId = counters.length + 1;
    const defaultCounter = {
      id: counterId,
      value: 0
    };
    const newCounters = [...counters, defaultCounter];
    setCounts(newCounters);
  };

  console.log(`[Render App]`);

  return (
    <div className="App">
      {/* Counters */}
      {counters.map(showCounters)}
      <br />
      <h2>Add one counter</h2>
      <button onClick={handleClick}>Add Counter</button>
    </div>
  );
};

export default App;
