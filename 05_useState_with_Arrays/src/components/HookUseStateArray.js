import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function HookUseStateArray() {
    const [numbers, setNumber] = useState([]);
    const [persons, setPerson] = useState([
        { firstName: 'joe', lastName:'rose', country:'mali', id: 1},
        { firstName: 'anna', lastName:'rose', country:'benin', id: 2},
        { firstName: 'hasan', lastName:'powel', country:'ethopia', id: 3}
    ]);

    const handleAddName = () => {
        setNumber(() => {
            return [...numbers, { value: Math.floor(Math.random() * 100 + 1), id:uuidv4(), id_simple: numbers.length}]
        })
    }

    console.log(numbers)


    return (
        <div>
            <button onClick={handleAddName}>Add User</button>

            <ul>
                { numbers.map((item) => <li key={item.id}> {item.value} | {item.id} | {item.id_simple} |</li>)}
            </ul>

            <ul>
                { persons.map((item) => <li key={item.id}>  firstName :  {item.firstName} id :  {item.id} </li>)}
            </ul>




        </div>
    );
}

export default HookUseStateArray
