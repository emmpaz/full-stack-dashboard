import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { Campaign } from './types';
import {CampaignList} from '../components/campaignList';
import Button from '@mui/material/Button';

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

    return(
        <div>
            <Button style={{float: 'right'}} onClick={() => navigate("/login")}>Logout</Button>
            <h1>Welcome, </h1>
            <h1>List of Campaigns</h1>
            <Button onClick={() => navigate("/createCampaign")}>Create Campaign</Button>
            <div className='camp-container'>
                {myCampaigns.map((campaign) => (
                    <CampaignList campaign={ campaign }/>
                ))}
            </div>
        </div>
    );
}

export default Dashboard;