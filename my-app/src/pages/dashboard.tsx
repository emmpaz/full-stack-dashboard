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

    //campaign lists states
    const [myCampaigns, setCampaigns] = useState<Campaign[]>([]);
    const [originalList, setList] = useState<Campaign[]>([]);

    //sorting states
    const [sortName, setName] = useState<String>(sortNameState[2]);
    const [sortDate, setDate] = useState<String>(sortDateState[2]);
    const [sortSpend, setSpend] = useState<String>(sortSpendState[2]);

    //active and archived states
    const [isActive, setActive] = useState<Boolean>(true);
    const isMount = useIsMount();



    useEffect(() => {
        if (isMount) {
            fetchCampaigns("active");
            console.log('fetching');
        } else {
        console.log('Subsequent Render');
        }
  });

    const fetchCampaigns = (active_or_not: String) => {
        axios.get(`https://ps-springboot.azurewebsites.net/${active_or_not}_campaigns`).then((res) => {
        console.log(res);

        setCampaigns(res.data);
        })
        .catch((err) => {
        console.log(err);
        });
    };

    const archivedCampaignsHandler = () => {
        if(!isActive){
            setDate(sortDateState[2])
            setName(sortNameState[2])
            setSpend(sortSpendState[2])
            
            setActive(!isActive)
            fetchCampaigns("active")
        }
        else{
            setDate(sortDateState[2])
            setName(sortNameState[2])
            setSpend(sortSpendState[2])

            setActive(!isActive)
            fetchCampaigns("archived")
        }
    }

    const activeCampaignsHandler = () => {
        if(!isActive){
            setDate(sortDateState[2])
            setName(sortNameState[2])
            setSpend(sortSpendState[2])

            setActive(!isActive)
            fetchCampaigns("active")
        }
    }

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
        <BigContainer>
            <TitleContainer> 
            <Button style={{float: 'right' ,margin: 21}} onClick={() => navigate("/login")}>Logout</Button>
            </TitleContainer>
            <MidContainer>
                <CampaignContainer>
                    <div>
                        <h1>List of Campaigns</h1>
                        <Button variant={(isActive) ? "contained" : "text"} onClick={activeCampaignsHandler}>Active</Button>
                        <Button variant={(!isActive) ? "contained" : "text"} onClick={archivedCampaignsHandler}>Archived</Button>
                        <Button onClick={() => navigate("/createCampaign")}>Create Campaign</Button>
                        <Button variant={(sortName === "A-Z" || sortName === "Z-A") ? "contained": "text"} onClick={sortNameHandler} style={{margin: 21}}>{(sortName === "default") ? "A-Z" : sortName}</Button>
                        <Button variant={(sortDate === end_date_down || sortDate === end_date_up) ? "contained": "text"} onClick={sortEndDateHandler} style={{margin: 21}}>{(sortDate === "default") ? end_date_down : sortDate}</Button>
                        <Button variant={(sortSpend === spend_down || sortSpend === spend_up) ? "contained": "text"} onClick={sortBudgetHandler} style={{margin: 21}}>{(sortSpend === "default") ? spend_down : sortSpend}</Button>
                        <div className='camp-container'>
                            {myCampaigns.map((campaign) => (
                                <CampListItem 
                                    year="2022"
                                    title={campaign.campaignName.toString()}
                                    budget={campaign.budget.toString()}
                                    end={campaign.endDate.toString()}/>
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