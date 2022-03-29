import React, { useState } from "react";

function CounterFunction() {
  const [counter, setCounter] = useState(0);
  const handleCounterIncrement = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      {/* <button onClick={() => setCounter(counter + 1)}> Increment: {counter}</button> */}
      <button onClick={handleCounterIncrement}> Increment: {counter}</button>
    </div>
  );
}

export default CounterFunction;
