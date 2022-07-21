import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import {BigContainer} from '../components/containers';
import { TitleContainer } from '../components/containers';
import { MidContainer } from '../components/containers';
import { CampaignContainer } from '../components/containers';
import { OtherContainer } from '../components/containers';
import { RevContainer } from '../components/containers';
import { GraphContainer } from '../components/containers';
import { Box } from '@mui/material';
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
        <BigContainer>
            <TitleContainer> 
            <Button style={{float: 'right'}} onClick={() => navigate("/login")}>Logout</Button>
            </TitleContainer>
            <MidContainer>
                <CampaignContainer>
                    <div>
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