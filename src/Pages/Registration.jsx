import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { targil1Context } from './Context';


let email = "";
let pass1 = "";
let pass2 = "";


export default function Registration() {

    const navigate = useNavigate();

    const { setUsers, users } = useContext(targil1Context)

    const btnRegister = () => {
        if (email === "" || pass1 === "" || pass2 === "") {
            alert("הלו הלו")
        }
        else {
            if (pass1 === pass2) {
                let newUser = { id: users.length + 1, email: email, pass: pass1 };
                let newUsers = [...users, newUser];
                setUsers(newUsers);
                navigate("/");
            }
            else {
                alert("סיסמאות אינן זהות")
            }
        }
    };

    return (
        <div style={{ border: "2px solid blue", padding: "25px", borderRadius:'10px' }}>
            <h2>Registration</h2>
            <label htmlFor="email">email: </label>
            <input type="email" id='email' onChange={e => email = e.target.value} /> <br />
            <label htmlFor="pass">pass: </label>
            <input type="password" id='pass' onChange={e => pass1 = e.target.value} /> <br />
            <label htmlFor="pass2">confirm pass: </label>
            <input type="password" id='pass2' onChange={e => pass2 = e.target.value} /> <br />
            <button onClick={btnRegister}>register</button>
        </div>
    )
}
