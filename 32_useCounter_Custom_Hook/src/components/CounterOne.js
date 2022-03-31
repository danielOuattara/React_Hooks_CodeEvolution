import React from "react";
import useCounter from "../hooks/useCounter";

function CounterOne() {

  const [count, increment, decrement, reset] = useCounter()
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={increment}>Increment Count </button>
      <button onClick={reset}>Reset Count </button>
      <button onClick={decrement}>Decrement Count </button>
    </div>
  );
}

export default CounterOne;
