import React from 'react';
import { useNavigate } from "react-router-dom";

const Dashboard = (props) => {
    const navigate = useNavigate();

    return(
        <div>       
            <h1>Welcome</h1>
            <p>slay girlboss!</p>
            <button onClick={() => navigate("/view")}>View Campaign</button>
            <button onClick={() => navigate("/create")}>Create New Campaign</button>
            <button onClick={() => navigate("/login")}>Logout</button>
        </div>
    );
};

export default Dashboard;