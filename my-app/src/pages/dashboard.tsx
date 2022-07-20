import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { Campaign } from './types';

const get_campaigns = axios.create({
    baseURL: 'https://ps-springboot.azurewebsites.net/campaign'
})

const Dashboard = () => {
    const navigate = useNavigate();
    const [myCampaigns, setCampaigns] = useState<Campaign[]>([]);

useEffect(() => {
    fetchCampaigns();}, []
);

const fetchCampaigns = () => {
    axios.get('https://ps-springboot.azurewebsites.net/campaign').then((res) => {
      console.log(res);

      setCampaigns(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};



  /*  componentDidMount() {
        get_campaigns.get('/').then(res => {
            console.log(res.data.campaignName)
        })
    }*/
    

    return(
        <div>
            <button onClick={() => navigate("/login")}>Logout</button>
            <h3>Dashboard</h3>
            <input
                type = "text"
                placeholder = "search"
                ></input>
            <h1>List of Campaigns</h1>
            <div className='camp-container'>
                {myCampaigns.map((campaign) => (
                    <div className='card'>
                        <h3>{campaign.campaignName}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Dashboard;