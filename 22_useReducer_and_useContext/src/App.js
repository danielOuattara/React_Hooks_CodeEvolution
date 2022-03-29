import { useReducer, createContext } from "react";
import ComponentA from "./components/ComponentA";
import ComponentB from "./components/ComponentB";
import ComponentC from "./components/ComponentC";
import "./App.css";

export const CountContext = createContext();

const initialState = 0;

const reducer = (state, action) => {
  switch (action) {
    case "INCREMENT":
      return state + 1;

    case "DECREMENT":
      return state - 1;

    case "RESET":
      return initialState;

    default:
      return state;
  }
};

function App() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <CountContext.Provider value={{ count, dispatch }}>
      <h2>Count : {count}</h2>
      <p>counterTwo</p>
      <ComponentA />
      <br /> <br />
      <ComponentB />
      <br /> <br />
      <ComponentC />
    </CountContext.Provider>
  );
}
export default App;
