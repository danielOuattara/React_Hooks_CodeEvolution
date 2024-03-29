import { useContext } from "react";
import { CountContext } from "./../App";

function ComponentD() {
  const countContext = useContext(CountContext);
  return (
    <>
      Component D : &nbsp;
      <button onClick={() => countContext.dispatch("INCREMENT")}>
        Increment
      </button>
      <button onClick={() => countContext.dispatch("DECREMENT")}>
        Decrement
      </button>
      <button onClick={() => countContext.dispatch("RESET")}>Reset</button>
      <span>{countContext.count}</span>
    </>
  );
}

export default ComponentD;
