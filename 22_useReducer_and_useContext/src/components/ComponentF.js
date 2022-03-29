import { useContext } from "react";
import { CountContext } from "./../App";

function ComponentF() {
  const {count, dispatch } = useContext(CountContext);
  return (
    <>
      Component F : &nbsp;
      <button onClick={() => dispatch("INCREMENT")}>
        Increment
      </button>
      <button onClick={() => dispatch("DECREMENT")}>
        Decrement
      </button>
      <button onClick={() => dispatch("RESET")}>Reset</button>
      <span>{count}</span>
    </>
  );
}

export default ComponentF;
