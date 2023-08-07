// in this components you will ablr to do LOGIN and display the data of this user

import React, { useEffect, useState , useContext} from "react";
import axios from "axios";
import { TokenContext } from "../Context/TokenContext";
import {Link} from "react-router-dom";

const Login = () => {

    const {token, setToken} = useContext(TokenContext);

    // connect to server
    const SERVER = "http://127.0.0.1:8000/app/";

    // use state for user details for login
    const [username, setuname] = useState("")
    const [password, setpassword] = useState("")
  
    // usestate that point if the user is connect or not
    const [logged, setlogged] = useState(false)

    // usestate to display message when the user do login 
    const [msg, setmsg] = useState("---")

    // func to make login
    const login = () => {
        axios.post(SERVER + "login", { username, password })
            .then((res) => setToken(res.data.access));
    };
   

    // use Effect to change from unlogged to logged mood (after the token approved)
    useEffect(() => {
        if (token)
            setlogged(true)
    }, [token]);

      // use Effect : when the user change just then change the msg (that appear at the welcome..)
    useEffect(() => {
        if (token) setmsg(username);
    }, [token]);
   
    return (
        <div>
            <h4 style={{textAlign: "center"}}> Login:</h4>
            {logged && 'Welcome Mr.' + msg + " - You are logged in !!"}<hr></hr>
            <div style={{width: "50%" , margin: "0 auto"}}>
                <input className="form-control" placeholder="Name" onChange={(e) => setuname(e.target.value)} type="text"/><br/>
                <input className="form-control" placeholder="Password" onChange={(e) => setpassword(e.target.value)} type="password"/><br/>
                <button className="btn btn-primary" onClick={() => login()}>Login</button> <br/><br/>
            </div>

            <h4>Dont have an user? </h4>
            <Link to="/Register"> 
          <button className="btn btn-primary">sign up</button>
        </Link>
           
           
        </div>
    );
};

export default Login;
