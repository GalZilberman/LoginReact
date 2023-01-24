import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { targil1Context } from './Context';


let title = "";
let description = "";

export default function Main() {

    const { setNotes, notes, setCounter, counter } = useContext(targil1Context);
    const navigate = useNavigate()

    const btnAdd = () => {
        if (title === "" || description === "") {
            alert("לא ניתן להוסיף פתקים ריקים")
        }
        else {
            let newNote = { id: counter, title: title, description: description };
            setCounter(prev => prev + 1);
            let newNotes = [...notes, newNote];
            setNotes(newNotes);
            navigate("/notes");
        }
    };



    return (
        <div>
            <div style={{ border: "2px solid blue", padding: "25px", borderRadius: '10px' }}>
                <h2>Main</h2>
                <label htmlFor="title">title: </label>
                <input type="text" id='title' onChange={e => title = e.target.value} /> <br />
                <label htmlFor="description">description: </label>
                <input type="text" id='description' onChange={e => description = e.target.value} /> <br />
                <button onClick={btnAdd}>add</button> <br />
                <Link to="/notes">go 2 notes page</Link>
            </div>
        </div>
    )
}
