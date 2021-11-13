import React, { useState } from 'react';

function NameFunctionObject() {
    const [name, setName] = useState( {
        firstName: '',
        lastName: '',
        country: ''
    });

    // const handleFirstName = (event) => {   // OK !
    //     setName({...name, firstName: event.target.value })
    // };

    // const handleFirstName = (event) => {  // OK !
    //     setName(() => {
    //         return {...name, firstName: event.target.value };
    //     })
    // };

    // function handleFirstName(event) {  // OK !
    //     setName( {...name, firstName: event.target.value})
    // }
        
    function handleFirstName(event) {
        return setName(() => {
            return {...name, firstName: event.target.value}})  
    }

    function handleLastName(event) {
        return setName(() => {
            return {...name, lastName: event.target.value}})  
    }

     console.log(name)
     
    return (
            <form /* onSubmit={""} */>
                <label htmlFor="">
                    Firstname : &nbsp;
                    <input 
                       type="text"  
                       value={name.firstName}/* useful ? what if absent ? */
                       placeholder="Enter your firtName" 
                       onChange={handleFirstName} 
                    />
                </label>
                <br />
                <br />
                <label htmlFor="">
                    Lastname : &nbsp;
                    <input 
                       type="text"  
                       value={name.lastName}/* useful ? what if absent ? */
                       placeholder="Enter your lastName" 
                       onChange={handleLastName} 
                    />
                </label>
                <h2>firstName is : {name.firstName}</h2>
                <h2>lastName is : {name.lastName}</h2>
            </form>
    );
}
export default NameFunctionObject
