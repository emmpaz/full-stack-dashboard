import React from "react";
import { useNavigate, Link } from 'react-router-dom';

const Create = (props) => {
    const navigate = useNavigate();
    return (
        <div>
            <h1>Create New Campaign</h1>
            <p>Campaign Name
            <input 
                type="text"
                value="girlbosses girlbossing"
            /></p>
            <p>Start Date
                <input 
                    type="date"
                />
            </p>
            <p>End Date
                <input 
                    type="date"
                />
            </p>
            <p>Channel
                <select name="Channel Selection">
                    <option value="onsite">Onsite</option>
                    <option value="offsite">Offsite</option>
                    <option value="social media">In Store</option>
                </select>
            </p>
            <p>
                <button onClick={() => navigate("/")}>Submit</button>
            </p>
        </div>
    );
    
};

export default Create;