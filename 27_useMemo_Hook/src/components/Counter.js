import { useMemo, useState } from "react";

function Counter() {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  const incrementOne = () => {
    console.log("call incrementOne");
    setCounterOne(counterOne + 1);
  };
  const incrementTwo = () => {
    console.log("call incrementTwo");
    setCounterTwo(counterTwo + 1);
  };

  // isEven is slown down using the 'while loop' to simulate an Async action
  // As a result isEven() response is slown down on counterOne ,but also the
  // counterTwo is slown down: this is where useMemo hooks acts

  //   const isEven = () => {
  //     let i = 0;
  //     while (i < 2e9) i++;
  //     return counterOne % 2 === 0;
  //   };

  const newIsEven = useMemo(() => {
    let i = 0;
    while (i < 2e9) i++;
    return counterOne % 2 === 0;
  }, [counterOne]);

  return (
    <div>
      {/* <button onClick={incrementOne}>
        counterOne: {counterOne} <span>{isEven() ? "Even" : "Odd"}</span>{" "}
      </button> */}

      <button onClick={incrementOne}>
        counterOne: {counterOne} <span>{newIsEven ? "Even" : "Odd"}</span>{" "}
      </button>

      <button onClick={incrementTwo}> counterTwo: {counterTwo}</button>
    </div>
  );
}

export default Counter;

/*
- useCall: caches the provied instance callback itself 
  (caches a callback function)
- useMemo: invoke the provided function, but caches it result 
  (cache the result of the invoked function)
*/
