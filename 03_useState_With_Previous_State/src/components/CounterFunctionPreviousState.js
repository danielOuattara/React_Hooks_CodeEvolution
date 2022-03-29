import React, { useState } from 'react';

function CounterFunctionPreviousState() {

    const initialCounter = 0;
    const [counter, setCounter] = useState(initialCounter);
    const handleCounterIncrement = () => {
        setCounter(prevCount => prevCount + 1)
    }
    const handleCounterDecrement = () => {
        setCounter(counter => counter - 1)
    }

    return (
        <div>
            <h2>Counter : {counter}</h2>
            <button onClick={handleCounterIncrement}> Increment</button>
            <button onClick={() => setCounter(counter => counter + 5)}> Increment by 5</button>
            <button onClick={() => setCounter(counter => initialCounter)}> Reset</button>
            <button onClick={handleCounterDecrement}> Decrement</button>
            <button onClick={() => setCounter(counter +3)}> Decrement by 3</button>
        </div>
    );
}

export default CounterFunctionPreviousState;
