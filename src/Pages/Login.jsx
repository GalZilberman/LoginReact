import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { targil1Context } from './Context';


let email = "";
let pass = "";

export default function Login() {

    const navigate = useNavigate();

    const { users } = useContext(targil1Context);

    const btnLogin = () => {
        if (users.find(user => user.email === email) != undefined && users.find(user => user.pass === pass) != undefined) {
            email = "";
            pass = "";
            navigate("main");
        }
        else {
            alert("יש לנסות שוב")
        }

    };


    return (

        <div style={{ border: "2px solid blue", padding: "25px", borderRadius:'10px' }}>
            <h2>Login</h2>
            <label htmlFor="email">email: </label>
            <input type="email" id='email' onChange={e => email = e.target.value} /> <br />
            <label htmlFor="pass">pass: </label>
            <input type="password" id='pass' onChange={e => pass = e.target.value} /> <br />
            <button onClick={btnLogin}>LOGIN</button> <br />
            <Link to="/registration">press here to Register</Link>

        </div>
    )
}
