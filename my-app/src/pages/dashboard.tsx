import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const Dashboard = () => {
    const navigate = useNavigate();

    return(
        <div>
            <button onClick={() => navigate("/login")}>Logout</button>
            <h3>Dashboard</h3>
            <input
                type = "text"
                placeholder = "search"
                ></input>
        </div>
    );
}

export default Dashboard;