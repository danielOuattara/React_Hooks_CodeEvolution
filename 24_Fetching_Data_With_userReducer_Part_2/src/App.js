import "./App.css";
import DataFetchingUseState from "./components/DataFetchingUseState";
import DataFetchingUseReducer from "./components/DataFetchingUseReducer";

function App() {
  return (
    <>
      <DataFetchingUseState />
      <br />
      <hr />
      <br />
      <DataFetchingUseReducer />
    </>
  );
}
export default App;
