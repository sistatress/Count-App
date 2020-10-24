import React, {useState, useEffect} from "react";
import "./styles.css";

const App = () => {

  const [count, setCount] = useState(0)
  const [count2, setCount2] = useState(0)

  // App Effects (it's about what's happen after render)
  useEffect(() => {
    console.log(`Effect run after eatch render`)
  })

  useEffect(() => {
    console.log(`Effect run only once`)
  },[])

  useEffect(() => {
    console.log(`Effect run if _count dependencie change`)
  },[count])

  useEffect(() => {
    console.log(`Effect run if _count OR _count2 dependencies change`)
  },[count, count2])

  // Increment counter1
  const add = () => {
    
    const addResult = count + 1
    setCount(addResult)
    console.log(`addResult counter1: ${addResult}`)
  }

  // Increment counter2
  const add2 = () => {
    
    const addResult = count2 + 1
    setCount2(addResult)
    console.log(`addResult counter2: ${addResult}`)
  }
  
  console.log(`
    [render App] count: ${count} | count2: ${count2}
  `)
  return (
    <div className="App">
      <h1>Count App</h1>
      <p>Count state: {count}</p>
      <button onClick={add}>+</button>
      <p>Count state: {count2}</p>
      <button onClick={add2}>+</button>
    </div>
  );
}

export default App