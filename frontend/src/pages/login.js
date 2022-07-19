import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Login = (props) => {
    const navigate = useNavigate();

    return(
        <div>
            <h1>Login</h1>
            <input 
                type="text"
                value="username"
            />
            <input
                type="text"
                value="password"
            />
            <button onClick={() => navigate("/")}>Submit</button>
        </div>
    );
};

export default Login;