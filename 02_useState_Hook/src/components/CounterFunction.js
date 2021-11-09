import React, { useState } from 'react';

function CounterFunction() {
    
    const [counter, setCounter] = useState(0);
    const handleCounterIncrement = () => {
        setCounter(counter + 1)
    }

    return (
        <div>
            <button onClick={handleCounterIncrement}> Increment: {counter}</button>
        </div>
    );
}

export default CounterFunction;
