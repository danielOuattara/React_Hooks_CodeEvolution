import React, { useState, useEffect } from "react";

export default function CounterFunctionHook() {
  const [counter, setCounter] = useState(0);

  const handleClickCounter = () => {
    return setCounter((counter) => counter + 1);
  };

  useEffect(() => {
    document.title = `Clicked ${counter} times`;
  }, [counter]);

  return (
    <div>
      <button onClick={handleClickCounter}>Clicked {counter} times</button>
    </div>
  );
}
