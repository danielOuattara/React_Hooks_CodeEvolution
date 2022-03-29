import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function HookUseStateArray() {
    const [numbers, setNumber] = useState([]);
    // const [persons, setPerson] = useState([]);

    const handleAddNumber = () => {
        setNumber(() => {
            return [...numbers, { value: Math.floor(Math.random() * 100 + 1), id:uuidv4(), id_simple: numbers.length}]
        })
    };

    // const handleAddName = () => {
    //     setNumber(() => {
    //         return [...numbers, { value: Math.floor(Math.random() * 100 + 1), id:uuidv4(), id_simple: numbers.length}]
    //     })
    // };

    return (
        <div>
            <button onClick={handleAddNumber}>Add Number to numbers[]</button>
            <ul>
                { numbers.map((item) => <li key={item.id}> {item.value} | {item.id} | {item.id_simple} </li>)}
            </ul>
            {/* <ul>
                { persons.map((item) => <li key={item.id}>  firstName :  {item.firstName} id :  {item.id} </li>)}
            </ul> */}
        </div>
    );
}
export default HookUseStateArray;
