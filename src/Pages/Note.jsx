import React, { useContext } from 'react'
import { targil1Context } from './Context'

export default function Note(props) {

    const { setNotes, notes } = useContext(targil1Context);

    const btnRemove = () => {
        let newNotesList = notes.filter(note => note.id !== props.id);
        setNotes(newNotesList);
    };

    return (
        <div style={{ border: "2px solid blue", padding: "25px", borderRadius: '10px' }}>
            {props.title}: {props.description} <span style={{ color: "red", cursor: 'pointer' }} onClick={btnRemove}> X</span>

        </div>
    )
}
