import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { Campaign } from '../helper files/types';
import {Button} from "@mui/material";
import {useIsMount} from '../helper files/mounting';
import { compare_by_date, compare_by_name, compare_by_budget} from '../helper files/comparators';
import { CampaignList } from '../components/campaignList';

const get_campaigns = axios.create({
    baseURL: 'https://ps-springboot.azurewebsites.net/campaign'
})

const Dashboard = () => {
    const navigate = useNavigate();
    const [myCampaigns, setCampaigns] = useState<Campaign[]>([]);
    const isMount = useIsMount();

    useEffect(() => {
        if (isMount) {
            fetchCampaigns();
            console.log('fetching');
        } else {
        console.log('Subsequent Render');
        }
  });

    const fetchCampaigns = () => {
        axios.get('https://ps-springboot.azurewebsites.net/campaign').then((res) => {
        console.log(res);

        setCampaigns(res.data);
        })
        .catch((err) => {
        console.log(err);
        });
    };

    const sortNameHandler = () => {
        const list: Campaign[] = [...myCampaigns]
        list.sort(compare_by_name);
        setCampaigns(list);
    }

    const sortEndDateHandler = () => {
        const list: Campaign[] = [...myCampaigns]
        list.sort(compare_by_date);
        setCampaigns(list);
    }

    const sortBudgetHandler = () => {
        const list: Campaign[] = [...myCampaigns]
        list.sort(compare_by_budget);
        setCampaigns(list);
    }
    return(
        <div>
        <Button style={{float: 'right'}} onClick={() => navigate("/login")}>Logout</Button>
            <h1>List of Campaigns</h1>
            <Button onClick={() => navigate("/createCampaign")}>Create Campaign</Button>
            <Button onClick={sortNameHandler} style={{margin: 21}}>A-Z</Button>
           <Button  onClick={sortEndDateHandler} style={{margin: 21}}>end date</Button>
           <Button  onClick={sortBudgetHandler} style={{margin: 21}}>SPEND</Button>
            <div className='camp-container'>
                {myCampaigns.map((campaign) => (
                    <CampaignList campaign={ campaign }/>
                ))}
            </div>
        </div>
    );
}

export default Dashboard;