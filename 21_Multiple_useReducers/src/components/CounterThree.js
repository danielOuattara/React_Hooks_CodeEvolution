// 2 useReducers using the same initialState on initialization only.
// By then they own state is unique for each of them

import { useReducer } from "react";

const initialState = {
  counter: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT_BY_1":
      return {
        ...state,
        counter: state.counter + 1,
      };
    case "DECREMENT_BY_1":
      return {
        ...state,
        counter: state.counter - 1,
      };
    case "RESET_FIRST_COUNTER":
      return {
        ...state,
        counter: state.counter,
      };
    case "INCREMENT_BY_5":
      return {
        ...state,
        counter: state.counter + action.payload,
      };
    case "DECREMENT_BY_5":
      return {
        ...state,
        counter: state.counter + action.payload,
      };

    case "RESET_SECOND_COUNTER":
      return {
        ...state,
        counter: state.counter,
      };
    default:
      return state;
  }
};

function CounterThree() {
  const [countOne, dispatchOne] = useReducer(reducer, initialState);
  const [countTwo, dispatchTwo] = useReducer(reducer, initialState);
  return (
    <>
      <p>from counterThree</p>
      <h2>firstCounter : {countOne.counter}</h2>
      <button
        onClick={() => dispatchOne({ type: "INCREMENT_BY_1", payload: 1 })}
      >
        Increment
      </button>
      <button
        onClick={() => dispatchOne({ type: "DECREMENT_BY_1", payload: -1 })}
      >
        Decrement
      </button>
      <button onClick={() => dispatchOne({ type: "RESET_FIRST_COUNTER" })}>
        Reset
      </button>
      <br />

      <p>from counterThree</p>
      <h2>secondCounter : {countTwo.counter}</h2>
      <button
        onClick={() => dispatchTwo({ type: "INCREMENT_BY_5", payload: 5 })}
      >
        Increment
      </button>
      <button
        onClick={() => dispatchTwo({ type: "DECREMENT_BY_5", payload: -5 })}
      >
        Decrement
      </button>
      <button onClick={() => dispatchTwo({ type: "RESET_SECOND_COUNTER" })}>
        Reset
      </button>
      <br />
    </>
  );
}
export default CounterThree;
