
import './App.css';
import IntervalClassCounter from './components/IntervalClassCounter';
import IntervalFunctionCounterHook from './components/IntervalFunctionCounterHook';
function App() {
  return (
    <div className="App">
      <IntervalClassCounter />
      <br /><hr /> <br />
      <IntervalFunctionCounterHook />
    </div>
  );
}

export default App;
