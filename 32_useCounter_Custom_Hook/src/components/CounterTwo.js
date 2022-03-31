import React from "react";
import useCounter from "../hooks/useCounter";

function CounterTwo() {
  const [count, increment, decrement, reset] = useCounter(4, 3);

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={increment}>Increment Count </button>
      <button onClick={reset}>Reset Count </button>
      <button onClick={decrement}>Decrement Count </button>
    </div>
  );
}

export default CounterTwo;
