import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const CreateCampaign = () => {
    const navigate = useNavigate();
    
    return(
        <div>
            <h1>Create New Campaign</h1>
            <p>Campaign Name
                <input 
                    type="text"
                    placeholder="Campaign Name"
                /></p>
            <p>Client Name
                <input
                    type="text"
                    placeholder="Client Name"></input>
            </p>
            <p>Channel
                <select name="Channel Selection">
                    <option value="On-Site">Onsite</option>
                    <option value="Off-Site">Offsite</option>
                    <option value="In-Store">In Store</option>
                </select>
            </p>
            <p>Budget:
                <input
                    type="number">
                </input>
            </p>
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
            <p>
                <button onClick={() => navigate("/dashboard")}>Submit</button>
            </p>
        </div>
    );
}

export default CreateCampaign;