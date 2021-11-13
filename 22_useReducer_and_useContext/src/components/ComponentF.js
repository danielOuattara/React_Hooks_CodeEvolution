import { useContext} from 'react';
import { CountContext } from './../App';


function ComponentF() {
    const countContext = useContext(CountContext);
    return (
        <>
          Component F : &nbsp;
            <button onClick={() => countContext.dispatch('INCREMENT')}>Increment</button>
            <button onClick={() => countContext.dispatch('DECREMENT')}>Decrement</button>
            <button onClick={() => countContext.dispatch('RESET')}>Reset</button>
        </>
    );
}

export default ComponentF;
