import React, { useEffect } from "react";

const Counter = ({ id, value, onAdd }) => {
  useEffect(() => {
    console.log(`Counter Effect`);
  }, [value]);
  console.log(`Counter render`);
  return (
    <div>
      <h2>
        Counter {id} : {value}
      </h2>
      <button onClick={onAdd}>+</button>
    </div>
  );
};

export default Counter;
