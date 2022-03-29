// import {useReducer} from 'react';

// const initialState = {
//     firstCounter: 0,
// };
// const reducer = (state, action) => {
//     switch(action.type) {
//         case 'INCREMENT' :
//             return {
//                 ...state,
//                 firstCounter: state.firstCounter + 1
//             }
//         case 'DECREMENT' :
//             return {
//                 ...state,
//                 firstCounter: state.firstCounter -1
//             }

//         case 'RESET' :
//             return initialState
//         default:
//         return state;
//     }
// };

// function CounterTwo() {
//     const [count, dispatch] = useReducer(reducer, initialState);
//     return (
//         <>
//             <h2>Count : { count.firstCounter }</h2>
//             <button onClick={() => dispatch({type:'INCREMENT'})}>Increment</button>
//             <button onClick={() => dispatch({type:'DECREMENT'})}>Decrement</button>
//             <button onClick={() => dispatch({type:'RESET'})}>Reset</button>
//             <br />
//             <p>from counterTwo</p>
//         </>
//     )
// }
// export default CounterTwo;

//--------------------------------------------------------------------------------------

import { useReducer } from "react";

const initialState = {
  firstCounter: 0,
  secondCounter: 5,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT_BY_1":
      return {
        ...state,
        firstCounter: state.firstCounter + 1,
      };
    case "DECREMENT_BY_1":
      return {
        ...state,
        firstCounter: state.firstCounter - 1,
      };
    case "RESET_FIRST_COUNTER":
      return {
        ...state,
        firstCounter: initialState.firstCounter,
      };
    case "INCREMENT_BY_5":
      return {
        ...state,
        secondCounter: state.secondCounter + action.payload,
      };
    case "DECREMENT_BY_5":
      return {
        ...state,
        secondCounter: state.secondCounter + action.payload,
      };

    case "RESET_SECOND_COUNTER":
      return {
        ...state,
        secondCounter: initialState.firstCounter,
      };
    default:
      return state;
  }
};

function CounterTwo() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <h2>firstCounter : {count.firstCounter}</h2>
      <button onClick={() => dispatch({ type: "INCREMENT_BY_1", payload: 1 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "DECREMENT_BY_1", payload: -1 })}>
        Decrement
      </button>
      <button onClick={() => dispatch({ type: "RESET_FIRST_COUNTER" })}>
        Reset
      </button>
      <br />
      <p>from counterTwo</p>

      <h2>secondCounter : {count.secondCounter}</h2>
      <button onClick={() => dispatch({ type: "INCREMENT_BY_5", payload: 5 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "DECREMENT_BY_5", payload: -5 })}>
        Decrement
      </button>
      <button onClick={() => dispatch({ type: "RESET_SECOND_COUNTER" })}>
        Reset
      </button>
      <br />
      <p>from counterTwo</p>
    </>
  );
}
export default CounterTwo;
