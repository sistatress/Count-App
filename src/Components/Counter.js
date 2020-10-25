import React, { useEffect } from "react";

const Counter = ({ id, value, onAdd }) => {
  useEffect(() => {
    console.log(`Counter Effect id ${id}`);
  }, [value,id]);
  console.log(`Counter render`);
  return (
    <div>
      <h2>
        Counter {id} : {value}
      </h2>
      <button onClick={() => onAdd(id,value)}>+</button>
    </div>
  );
};

export default Counter;
