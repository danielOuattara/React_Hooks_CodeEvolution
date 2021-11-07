
import './App.css';
import CounterClass from './components/CounterClass';
import CounterClassPreviousState from './components/CounterClassPreviousState';
import CounterFunction from './components/CounterFunction';
import CounterFunctionPreviousState from './components/CounterFunctionPreviousState';


function App() {
  return (
    <div className="App">
      <CounterClass/>
      <hr />
      <br />
      <CounterFunction />
      <hr />
      <br />
      <CounterFunctionPreviousState />
      <hr />
      <br />

      <CounterClassPreviousState />


    </div>
  );
}

export default App;
