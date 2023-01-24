import React, { createContext, useState } from 'react'


export const targil1Context = createContext();


export default function Targil1ContextProvider(props) {



    const [users, setUsers] = useState(
        [
            {
                id: 1,
                email: "nirc7@king.co.il",
                pass: '7777777'
            },
            {
                id: 2,
                email: "gal@gmail.com",
                pass: '1234'
            },
        ]
    );


    const [counter  , setCounter  ] = useState(1);

    const [notes, setNotes] = useState(
        []
    );


    return (
        <targil1Context.Provider value={{users, notes, counter, setUsers, setNotes, setCounter}}>
            {props.children}
        </targil1Context.Provider>
    )
}
