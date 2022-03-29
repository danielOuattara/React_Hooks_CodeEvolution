//---------------------------------------------------------

import { useState, useEffect } from "react";

const IntervalFunctionCounterHook = () => {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);

  const ticTac = () => { // CASE 1
      setCounter( counter => counter + 1)
      console.log(counter)
  }
  useEffect(() => { // CASE 1
      const interval = setInterval(ticTac, 1000);
      return () => {
          clearInterval(interval);
      }
  }, [])

  //------------------------------------------------

  useEffect(() => {
    const ticTac2 = () => {
      setCounter2( counter2 => counter2 + 1);
    };
    const interval2 = setInterval(ticTac2, 1000);
    console.log(counter2);
    return () => {
      clearInterval(interval2);
    };
  }, [counter2]);

  return (
      
      <>
        <h1> Time : {counter}</h1>
        <h1> Time : {counter2}</h1>
      </>
  );

};

export default IntervalFunctionCounterHook;
