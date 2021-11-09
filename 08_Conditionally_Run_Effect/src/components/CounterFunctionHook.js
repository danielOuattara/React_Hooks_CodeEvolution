
import React, { useState, useEffect } from 'react'

function CounterFunctionHook() {

    const [counter, setCounter]  = useState(0);
    const [name, setName]  = useState("");
    
    const handleClickCounter = () => {
        return setCounter( counter => counter + 1)
    }

    const handleNameChange = (event) => {
        setName(name => event.target.value)
    }

    useEffect(() => {
        console.log("useEffect re-rendering")
        document.title = `Clicked ${counter} times`;
    }, [counter]);

    return (
        <div>
            <button onClick={handleClickCounter}>Clicked {counter} times</button>
            <input 
               type='text' 
               value={name} 
               onChange={handleNameChange}
            />   
        </div>
    );
}

export default CounterFunctionHook;
