import React, { useState, useEffect, useRef } from "react";

function FunctionnalTimer() {
  const [timer, setTimer] = useState(0);

  const intervalRef = useRef(null);
  console.log(intervalRef)

  // useEffect(() => {
  //   intervalRef.current = setInterval(() => {
  //     setTimer(() => timer + 1);
  //   }, 1000);
  //   return () => {
  //     clearInterval(intervalRef.current);
  //   };
  // }, [timer]);

  const startTimer = () => {
    intervalRef.current = setInterval(() => {
      setTimer(() => timer + 1)
    }, 100);
  };

  const stopTimer = () => {
    return clearInterval(intervalRef.current);
  };

  const resetTimer = () => {
    clearInterval(intervalRef.current);
    setTimer(0);
  };

  return (
    <div>
      ClassTimer: {timer}
      <button onClick={startTimer}>Start Timer</button>
      <button onClick={stopTimer}>Stop Timer</button>
      <button onClick={resetTimer}>Reset Timer</button>
    </div>
  );
}

export default FunctionnalTimer;
