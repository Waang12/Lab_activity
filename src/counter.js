import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    setCount(count - 1);
  };

  const resetCount = () => {
    setCount(0);
  };

  return (
    <div style={{ textAlign: "center", fontSize: '1.5em'}}>
      <h2>Counter</h2>
      <p style={{ fontSize: "3rem", fontWeight: "bold" , color: 'orange'}}>{count}</p>
      <div>
        <button style={{ marginRight: "10px" }} onClick={incrementCount}>
          +
        </button>
        <button style={{ marginRight: "10px" }} onClick={decrementCount}>
          -
        </button>
        <button onClick={resetCount}>Reset</button>
      </div>
    </div>
  );
}



export default Counter;
