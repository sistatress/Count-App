import React from "react";
import Counter from "./Counter";

const Counters = ({ countersList, onAdd, onSubtract, onDelete }) => {
  const showCounters = (element, index) => {
    //console.log(`element id: ${element.id} value: ${element.value} index: ${index}`)
    return (
      <div key={index}>
        <Counter
          id={element.id}
          value={element.value}
          onAdd={onAdd}
          onSubtract={onSubtract}
          onDelete={onDelete}
        />
      </div>
    );
  };

  return <div>{countersList.map(showCounters)}</div>;
};

export default Counters;
