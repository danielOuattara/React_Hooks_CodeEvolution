
import ComponentF from './Component_F';
import { useContext } from 'react';
import { UserContext, ChannelContext } from '../App';

import React from 'react'

export default function Component_E() {
    const user = useContext(UserContext);
    const channel = useContext(ChannelContext);
    return (
        <>
            <h1> {user} - {channel}</h1>
            <p>from component E</p>
            <hr />
            <ComponentF />            
        </>
    )
}
