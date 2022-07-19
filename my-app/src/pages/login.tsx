import React from "react";
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const navigate = useNavigate();

    return(
        <div>
            <h1>Login</h1>
            <input 
                type="username"
                placeholder="username"
            />
            <br></br>
            <input
                type="password"
                placeholder="password"
            />
            <br></br>
            <button onClick={() => navigate("/")}>Submit</button>
            <br></br>
            <button onClick={() => navigate("/createAcc")}>New User?</button>
        </div>
    );
}

export default Login;