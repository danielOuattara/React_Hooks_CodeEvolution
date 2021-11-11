
//---------------------------------------------------------

import { useState, useEffect } from 'react';

const IntervalFunctionCounterHook = () => {
    const [counter, setCounter] = useState(0);

    // const ticTac = () => { CASE 1
    //     setCounter( counter => counter + 1)
    //     console.log('==', counter)
    // }
    // useEffect(() => { CASE 1
    //     const interval = setInterval(ticTac, 1000);
    //     return () => {
    //         clearInterval(interval);
    //     }
    // }, [])

    const ticTac = () => {
        setCounter(counter + 1)
    }
    console.log('==', counter)
    
    useEffect(() => {
        const interval = setInterval(ticTac, 1000);
        return () => {
            clearInterval(interval);
        }
    }, [counter])
    

    return (<h1> Time : {counter}</h1>);
}

export default IntervalFunctionCounterHook;

