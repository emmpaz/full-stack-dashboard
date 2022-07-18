import React from "react";
import { useNavigate, Link } from 'react-router-dom';

const View = (props) => {
    const navigate = useNavigate();

    return (
        <div>
            <h1>View Campaign</h1>
            <p>data data data</p>
            <p>slay girlboss you're looking at data</p>
            <button onClick={() => navigate("/")}>Return</button>
        </div>
    );
};

export default View;