// in this component you will do REGISTER

import React, { useState } from "react";
import axios from "axios";

const Register = () => {

    // connect to server
    const SERVER = "http://127.0.0.1:8000/app/";

    // use state for user details for register
    const [username, setuname] = useState("")
    const [password, setpassword] = useState("")
    const [email, setemail] = useState("a@a.com")

    // usestate that point if the user is register success or not
    const [register, setRegister] = useState(false)

    // func to reg
    const reg = () => {
        axios.post(SERVER + "register", { username, password,email }).then(() => setRegister(true));
    };

    // you can also add msg useState that display the Respons from the django (in our case "new user born")
    // const [msg, setMsg] = useState("")

    return (
        <div> 
            <h4 style={{textAlign: "center"}}> Dont have an user? sign up:</h4>
            <hr/>
            {register && "Thank you for sign up Mr. " + username}
            <div style={{width: "50%" , margin: "0 auto"}}>
                <input className="form-control" placeholder="Name" onChange={(e) => setuname(e.target.value)} type="text"/><br/>
                <input className="form-control" placeholder="Password" onChange={(e) => setpassword(e.target.value)} type="password"/><br/>
                <input className="form-control" placeholder="E-mail" onChange={(e) => setemail(e.target.value)} type="text"/><br/>
                <button className="btn btn-primary" onClick={() => reg()}>Register</button><hr></hr>
            </div>
            {/* <h1 style={{ textAlign: "center" }}>{msg}</h1> */}
        </div>
    )
}

export default Register
