import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { Campaign } from './types';
import {CampaignList} from '../components/campaignList';
import {BigContainer} from '../components/containers';
import { TitleContainer } from '../components/containers';
import { MidContainer } from '../components/containers';
import { CampaignContainer } from '../components/containers';
import { OtherContainer } from '../components/containers';
import { RevContainer } from '../components/containers';
import { GraphContainer } from '../components/containers';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';

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
        <BigContainer>
            <TitleContainer> 
                <Button style={{float: 'right'}} onClick={() => navigate("/login")}>Logout</Button>
            </TitleContainer>
            <MidContainer>
                <CampaignContainer>
                    <h1>List of Campaigns</h1>
                    <Button onClick={() => navigate("/createCampaign")}>Create Campaign</Button>
                    {myCampaigns.map((campaign) => (
                        <CampaignList campaign={ campaign }/>
                    ))}
                </CampaignContainer>
                <OtherContainer> 
                    <RevContainer> 
                        <h1> Ad Rev Total </h1>
                    </RevContainer>
                    <GraphContainer> 
                        <h1> Graph </h1>
                    </GraphContainer>
                </OtherContainer>
            </MidContainer>
        </BigContainer>
    );
}

export default Dashboard;