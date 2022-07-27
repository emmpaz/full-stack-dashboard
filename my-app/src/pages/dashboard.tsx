import React, { useState, useEffect } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import {BigContainer} from '../components/containers';
import { TitleContainer } from '../components/containers';
import { MidContainer } from '../components/containers';
import { CampaignContainer } from '../components/containers';
import { OtherContainer } from '../components/containers';
import { RevContainer } from '../components/containers';
import { GraphContainer } from '../components/containers';
import { Paper } from '@mui/material';
import { Box, InputLabel, MenuItem, FormControl } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Campaign } from '../helper files/types';
import {Button} from "@mui/material";
import {useIsMount} from '../helper files/mounting';
import { compare_by_date, compare_by_name, compare_by_budget, compare_by_name_reversed, compare_by_date_reversed, compare_by_budget_reversed} from '../helper files/comparators';
import { CampListItem } from '../components/func_camp_list';
import { CampaignList } from '../components/campaignList';
import { end_date_down, end_date_up, spend_down, spend_up } from '../helper files/dashboard_states';
import '../css files/dashboard.css';
import Search from '../components/searchbar';
import Graph from '../components/graph';
import { BannerSelect } from '../components/bannerSelect';

const get_campaigns = axios.create({
    baseURL: 'https://ps-springboot.azurewebsites.net/campaign'
})

const sortNameState = [
    "A-Z",
    "Z-A",
    "default"
]

const sortDateState = [
    end_date_down,
    end_date_up,
    "default"
]

const sortSpendState = [
    spend_down,
    spend_up,
    "default"
]

const Dashboard = () => {
    const navigate = useNavigate();
    const isMount = useIsMount();

    //campaign lists states
    const [myCampaigns, setCampaigns] = useState<Campaign[]>([]);
    const [originalList, setList] = useState<Campaign[]>([]);
    //const [bannerId, setBannerId] = useState('');
    const { state } = useLocation();
    const [bannerId, setBannerId] = useState(state);

    //sorting states
    const [sortName, setName] = useState<String>(sortNameState[2]);
    const [sortDate, setDate] = useState<String>(sortDateState[2]);
    const [sortSpend, setSpend] = useState<String>(sortSpendState[2]);

    //active and archived states
    const [isActive, setActive] = useState<Boolean>(true);


    useEffect(() => {
        if (isMount) {
            fetchCampaigns("active");
            let tmpBanner: string = bannerId as string;
            //fetchCampaignsByBanner(tmpBanner);
            console.log('fetching');
        } else {
        console.log('Subsequent Render');
        }
  });

    const fetchCampaigns = (active_or_not: String) => {
        axios.get(`https://ps-springboot.azurewebsites.net/${active_or_not}_campaigns`).then((res) => {
        console.log(res);
        setList(res.data);
        setCampaigns(res.data);
        })
        .catch((err) => {
        console.log(err);
        });
    };

    const fetchCampaignsByBanner = (bannerId: String) => {
        axios.get(`https://ps-springboot.azurewebsites.net/banner/${bannerId}`).then((res) => {
        console.log(res);
        setList(res.data);
        setCampaigns(res.data);
        })
        .catch((err) => {
        console.log(err);
        });
    };

    const bannerSelectHandler = (event: SelectChangeEvent) => {
       // setBannerId(event.target.value as string)
        if(event.target.value == "7") {
            navigate("/login");
        }
        fetchCampaignsByBanner(event.target.value);
    }

    const bannerSelectOnLoad = (bannerId: String) => {
        fetchCampaignsByBanner(bannerId);
    }

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
        setDate(sortDateState[2]);
        setSpend(sortSpendState[2]);

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
        list.sort(compare_by_name);
        setCampaigns(list);
    }

    const sortEndDateHandler = () => {
        setName(sortNameState[2]);
        setSpend(sortSpendState[2]);

        const list: Campaign[] = [...myCampaigns]
        if(sortDate === "default"){
            setDate(sortDateState[0]);
            list.sort(compare_by_date);
            setCampaigns(list);
        }
        else if(sortDate.localeCompare(end_date_up)){
            setDate(sortDateState[1]);
            list.sort(compare_by_date_reversed);
            setCampaigns(list);
        }
        else{
            setDate(sortDateState[2]);
            setCampaigns(originalList);
        }
        list.sort(compare_by_date);
        setCampaigns(list);
    }

    const sortBudgetHandler = () => {
        setName(sortNameState[2]);
        setDate(sortDateState[2]);

        const list: Campaign[] = [...myCampaigns]
        if(sortSpend === "default"){
            setSpend(sortSpendState[0]);
            list.sort(compare_by_budget);
            setCampaigns(list);
        }
        else if(sortSpend.localeCompare(spend_up)){
            setSpend(sortSpendState[1]);
            list.sort(compare_by_budget_reversed);
            setCampaigns(list);
        }
        else{
            setSpend(sortSpendState[2]);
            setCampaigns(originalList);
        }
        list.sort(compare_by_budget);
        setCampaigns(list);
    }
    return(
        <BigContainer>
            <TitleContainer> 
            <Box sx={{ float: 'right', minWidth: 120 }}>
                <FormControl style ={{width: '100%'}} variant="standard">
                    <InputLabel id="banner_id">Banner</InputLabel>
                    <Select style ={{width: '100%'}} labelId="banner_id" name="banner" onChange={bannerSelectHandler}>
                        <MenuItem value="1">Fresh Direct</MenuItem>
                        <MenuItem value="2">Food Lion</MenuItem>
                        <MenuItem value="3">Stop and Shop</MenuItem>
                        <MenuItem value="4">The Giant Company</MenuItem>
                        <MenuItem value="5">Giant</MenuItem>
                        <MenuItem value="6">Hannaford</MenuItem>
                        <MenuItem sx={{ color: '#00C832 !important' }} value="7">Logout</MenuItem>
                    </Select>
                </FormControl>
            </Box>
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
                        <div className='camp-container' >
                            {myCampaigns.map((campaign) => (
                                <Box onClick={() => navigate("/detailView", { state: { currentCamp: campaign }})}>
                                <CampListItem 
                                    
                                    year="2022"
                                    title={campaign.campaignName.toString()}
                                    budget={campaign.budget.toString()}
                                    end={campaign.endDate.toString()} /></Box>
                            ))}
                        </div>
                        <div>
                            <Search list={myCampaigns}/>
                        </div>
                    </div>
                </CampaignContainer>
                <OtherContainer> 
                    <RevContainer> 
                        <h1> Ad Rev Total </h1>
                        <Paper> $19,242,293 </Paper>
                    </RevContainer>
                    <GraphContainer> 
                        <h1> Graph </h1>
                        <Graph> </Graph>
                    </GraphContainer>
                </OtherContainer>
            </MidContainer>
        </BigContainer>
    );
}

export default Dashboard;