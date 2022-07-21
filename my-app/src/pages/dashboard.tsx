import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { Campaign } from '../helper files/types';
import {Button} from "@mui/material";
import {useIsMount} from '../helper files/mounting';
import { compare_by_date, compare_by_name } from '../helper files/comparators';

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
        console.log(myCampaigns);
    }

    const sortEndDateHandler = () => {
        const list: Campaign[] = [...myCampaigns]
        list.sort(compare_by_date);
        setCampaigns(list);
    }
 
    

    return(
        <div>
            <button onClick={() => navigate("/login")}>Logout</button>
            <h3>Dashboard</h3>
            <input
                type = "text"
                placeholder = "search"
                ></input>
           <Button onClick={sortNameHandler} style={{margin: 21}}>A-Z</Button>
           <Button  onClick={sortEndDateHandler} style={{margin: 21}}>end date</Button>
           <Button  style={{margin: 21}}>SPEND</Button>
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