import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { Campaign } from '../helper files/types';
import {Button} from "@mui/material";
import {useIsMount} from '../helper files/mounting';
import { compare_by_date, compare_by_name, compare_by_budget, compare_by_name_reversed, compare_by_date_reversed} from '../helper files/comparators';
import { CampaignList } from '../components/campaignList';

const get_campaigns = axios.create({
    baseURL: 'https://ps-springboot.azurewebsites.net/campaign'
})

const sortNameState = [
    "A-Z",
    "Z-A",
    "default"
]

const sortDateState = [
    "earliest",
    "latest",
    "default"
]

const Dashboard = () => {
    const navigate = useNavigate();
    const [myCampaigns, setCampaigns] = useState<Campaign[]>([]);
    const [originalList, setList] = useState<Campaign[]>([]);

    const [sortName, setName] = useState<String>(sortNameState[2]);
    const [sortDate, setDate] = useState<String>(sortDateState[2]);

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
        setList(res.data);
        setCampaigns(res.data);
        })
        .catch((err) => {
        console.log(err);
        });
    };

    const sortNameHandler = () => {
        setDate(sortDateState[2]);

        const list: Campaign[] = [...myCampaigns]
        if(sortName === "default"){
            setName(sortNameState[0]);
            list.sort(compare_by_name);
            setCampaigns(list);
        }
        else if(sortName === "A-Z"){
            setName(sortNameState[1]);
            list.sort(compare_by_name_reversed);
            setCampaigns(list);
        }
        else{
            setName(sortNameState[2]);
            setCampaigns(originalList);
        }
    }

    const sortEndDateHandler = () => {
        setName(sortNameState[2])

        const list: Campaign[] = [...myCampaigns]
        if(sortDate === "default"){
            setDate(sortDateState[0]);
            list.sort(compare_by_date);
            setCampaigns(list);
        }
        else if(sortDate === "earliest"){
            setDate(sortDateState[1]);
            list.sort(compare_by_date_reversed);
            setCampaigns(list);
        }
        else{
            setDate(sortDateState[2]);
            setCampaigns(originalList);
        }
    }

    const sortBudgetHandler = () => {
        const list: Campaign[] = [...myCampaigns]
        list.sort(compare_by_budget);
        setCampaigns(list);
        setName(sortNameState[2])
    }
    return(
        <div>
        <Button style={{float: 'right'}} onClick={() => navigate("/login")}>Logout</Button>
            <h1>List of Campaigns</h1>
            <Button onClick={() => navigate("/createCampaign")}>Create Campaign</Button>
            <Button variant={(sortName === "A-Z" || sortName === "Z-A") ? "contained": "text"} onClick={sortNameHandler} style={{margin: 21}}>{(sortName === "default") ? "A-Z" : sortName}</Button>
           <Button  variant={(sortDate === "earliest" || sortDate === "latest") ? "contained": "text"} onClick={sortEndDateHandler} style={{margin: 21}}>{(sortDate === "default") ? "end DATE" + String.fromCharCode(8593) : sortDate}</Button>
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