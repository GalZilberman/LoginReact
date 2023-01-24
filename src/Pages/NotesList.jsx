import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { targil1Context } from './Context'
import Note from './Note';

export default function NotesList() {

    const { notes } = useContext(targil1Context);

    const notesList = notes.map(note => <Note key={note.id} id={note.id} title={note.title} description={note.description} />);


    return (
        <div style={{ border: "2px solid blue", padding: "25px", borderRadius: '10px' }}>
            <h2>Notes</h2>
            {notesList} <br />
            <Link to="/main">go 2 main page</Link>

        </div>
    )
}
