import React, { useState, useEffect} from 'react';

function FunctionMouseHook() {
    const [ mouse, setMouse] = useState({ x: 0, y: 0});

    const logMousePosition = (event) => {
        console.log("mouse event")
        setMouse({ x: event.clientX, y: event.clientY })
    }

    useEffect( () => {
        console.log("useEffect rendering")
        window.addEventListener("mousemove", logMousePosition);
    }, [])

    return (
        <div>
            <h2> X - {mouse.x}  Y - {mouse.y}</h2>
        </div>
    );
}
export default FunctionMouseHook;
