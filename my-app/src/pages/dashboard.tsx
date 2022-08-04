import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import {BigContainer} from '../components/containers';
import { TitleContainer } from '../components/containers';
import { MidContainer } from '../components/containers';
import { CampaignContainer } from '../components/containers';
import { OtherContainer } from '../components/containers';
import { RevContainer } from '../components/containers';
import { GraphContainer } from '../components/containers';
import { Container, Fab, Grid, Paper, Stack, Tabs, ThemeProvider, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';
import { Box, InputLabel, MenuItem, FormControl } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Campaign } from '../helper files/types';
import {Button} from "@mui/material";
import {useIsMount} from '../helper files/mounting';
import { compare_by_date, compare_by_name, compare_by_budget, compare_by_name_reversed, compare_by_date_reversed, compare_by_budget_reversed} from '../helper files/comparators';
import { CampListItem } from '../components/func_camp_list';
import { end_date_down, end_date_up, spend_down, spend_up } from '../helper files/dashboard_states';
import '../css files/dashboard.css';
import Search from '../components/searchbar';
import { offSiteCalculation, inStoreCalculation, onSiteCalculation } from '../components/graphCalculations';

import Graph from '../components/graph';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import AddIcon from '@mui/icons-material/Add';
import JoshTheme from '../css files/allStyle';
import aholdLogo from '../assets/images/transparentAhold.png';
import React from 'react';


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

    const activityUpdated = false;

    //campaign lists states
    const [myCampaigns, setCampaigns] = useState<Campaign[]>([]);
    const [originalList, setList] = useState<Campaign[]>([]);

    const [activeUpdated, setActiveUpdated] = useState(false);


    var listForGraph = myCampaigns as Campaign[];

    //const [bannerId, setBannerId] = useState('');
    const { state } = useLocation();
    var initBannerId = (state as any).bannerId;
    const [bannerId, setBannerId] = useState((state as any).bannerId);

    //sorting states
    const [sortName, setName] = useState<String>(sortNameState[2]);
    const [sortDate, setDate] = useState<String>(sortDateState[2]);
    const [sortSpend, setSpend] = useState<String>(sortSpendState[2]);

    //active and archived states
    const [isActive, setActive] = useState<boolean>(true);

   // var budgetTotal = 0.00;
    var budgetTotal = calculateClientRevenue(initBannerId);
    var calculated = false;
    
    function calculateClientRevenue(tmpBannerId: number): number {
        var bannerBudget = 0;
        
        myCampaigns.forEach( (element) => {
            bannerBudget+=element.budget;
        })
        calculated = true;
        budgetTotal = bannerBudget;
        return budgetTotal
    };

    function updateBudget(): number {
        return budgetTotal;
    };


    useEffect(() => {
        if (isMount) {
            //fetchCampaigns("active");
            fetchCampaigns("active", bannerId);
           // let tmpBanner: string = bannerId as string;
            //fetchCampaignsByBanner(tmpBanner);
            console.log('fetching');
            if(!calculated) {
                console.log(bannerId);
                calculateClientRevenue(bannerId);
            }
            //fetchCampaignsByBanner(initBannerId);
        } else {
        console.log('Subsequent Render');
        }
  });

    const fetchCampaigns = (active_or_not: String, initBannerId : any) => {
        console.log("fetching... " + initBannerId)

        axios.get(`https://ps-springboot.azurewebsites.net/${active_or_not}_campaigns/${initBannerId}`).then((res) => {
        //console.log(res);
        
        setList(res.data);
        setCampaigns(res.data);
        })
        .catch((err) => {
        console.log(err);
        });
        
        console.log(activeUpdated);
        /*
        if(activeUpdated == false) {
            updateActivity(active_or_not, initBannerId);
            setActiveUpdated(true);
        }*/

    };

    const updateActivity = (active_or_not: String, banner: any) => {
        var today = new Date();
        var change = false;
        console.log(myCampaigns);
        myCampaigns.map((campaign) => {
            if(campaign.endDate<today && campaign.isActive==true) {
                campaign.isActive = false;
                change = true;
                
                axios.put('https://ps-springboot.azurewebsites.net/campaign', campaign)
                    .then((res) => {
                        setList(res.data);
                        setCampaigns(res.data);
                    })
            }
        });
        
        if(change) {
            fetchCampaigns(active_or_not, banner);
        }
    }

   /* const fetchCampaignsByBanner = (bannerId: String) => {
        axios.get(`https://ps-springboot.azurewebsites.net/banner/${bannerId}`).then((res) => {
        console.log(res);
        setList(res.data);
        setCampaigns(res.data);
        })
        .catch((err) => {
        console.log(err);
        });
    };
*/
    const bannerSelectHandler = (event: SelectChangeEvent) => {
       // setBannerId(event.target.value as string)
        if(event.target.value == "7") {
            navigate("/login");
        }
        //reset all parameters
        setDate(sortDateState[2])
        setName(sortNameState[2])
        setSpend(sortSpendState[2])   
        setActive(true)

        initBannerId = event.target.value;
        setBannerId(parseInt(event.target.value));

        console.log("selected.... " + initBannerId);
        fetchCampaigns("active", event.target.value);
        var tmpNum = Number(event.target.value);
        calculateClientRevenue(tmpNum);
        
    }

    const archivedCampaignsHandler = () => {
        if(!isActive){
            setDate(sortDateState[2])
            setName(sortNameState[2])
            setSpend(sortSpendState[2])
            
            setActive(!isActive)
            fetchCampaigns("active", bannerId)
        }
        else{
            setDate(sortDateState[2])
            setName(sortNameState[2])
            setSpend(sortSpendState[2])

            setActive(!isActive)
            fetchCampaigns("archived", bannerId)
        }
    }

    const activeCampaignsHandler = () => {
        if(!isActive){
            setDate(sortDateState[2])
            setName(sortNameState[2])
            setSpend(sortSpendState[2])

            setActive(!isActive)
            fetchCampaigns("active", bannerId)
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
    }
    return(
        <Container maxWidth="xl" sx={{padding:3}}>
            <ThemeProvider theme={JoshTheme}>
                <Grid container sx={{padding: '0 25px 0 25px'}}>
                    <Grid item direction="column" xs={6}>
                        <img style ={{position:'relative',width: '25%', left: '25px', paddingBottom: '10px'}} className="ahold-logo-dashboard" src={aholdLogo}/>
                    </Grid>
                    <Grid item direction="column" xs={6}>
                        <FormControl fullWidth style ={{width: '95%', right: '12px', top: '50px'}} variant="standard">
                            <InputLabel id="banner_id">Banner</InputLabel>
                            <Select style ={{width: '100%'}} labelId="banner_id" name="banner"value={bannerId} onChange={bannerSelectHandler}>
                                <MenuItem value={1}>Fresh Direct</MenuItem>
                                <MenuItem value={2}>Food Lion</MenuItem>
                                <MenuItem value={3}>Stop and Shop</MenuItem>
                                <MenuItem value={4}>The Giant Company</MenuItem>
                                <MenuItem value={5}>Giant</MenuItem>
                                <MenuItem value={6}>Hannaford</MenuItem>
                                <MenuItem sx={{ color: '#00C832 !important' }} value="7">Logout</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>


            
            <MidContainer>
                <Paper elevation={4} sx={{width: '100vw', margin: 1}}>
                    <CampaignContainer>
                        <div>
                            <Grid container style={{
                                display: 'flex',
                                alignItems: 'center',
                                flexWrap: 'wrap',
                            }}> 
                                <Grid item  direction="column" xs={8}>
                                    <Typography align='left'>
                                        <h1>My Campaigns </h1>
                                    </Typography>
                                </Grid>
                                <Grid item  direction="column" xs={4}>
                                    <ToggleButtonGroup>
                                        <ToggleButton selected={isActive} value = "active" onClick={activeCampaignsHandler}>Active</ToggleButton>
                                        <ToggleButton selected = {!isActive} value = "archive" onClick={archivedCampaignsHandler}>Archive</ToggleButton>
                                    </ToggleButtonGroup>                                
                                </Grid>
                            </Grid>
                            <Grid container style={{
                                display: 'flex',
                                alignItems: 'center',
                                flexWrap: 'wrap',
                            }}>
                                <Grid item xs={11}> 
                                    <Search list={myCampaigns}/>
                                </Grid>
                                <Grid item xs={1}> 
                                    <Button onClick={() => navigate("/createCampaign", { state: { bannerId: initBannerId }})} size="large" color="primary">
                                        <AddBoxOutlinedIcon fontSize='large'/>
                                    </Button>
                                </Grid>
                            </Grid>
                            <Button variant={(sortName === "A-Z" || sortName === "Z-A") ? "contained": "text"} onClick={sortNameHandler} style={{margin: 21}}>{(sortName === "default") ? "A-Z" : sortName}</Button>
                            <Button variant={(sortDate === end_date_down || sortDate === end_date_up) ? "contained": "text"} onClick={sortEndDateHandler} style={{margin: 21}}>{(sortDate === "default") ? end_date_down : sortDate}</Button>
                            <Button variant={(sortSpend === spend_down || sortSpend === spend_up) ? "contained": "text"} onClick={sortBudgetHandler} style={{margin: 21}}>{(sortSpend === "default") ? spend_down : sortSpend}</Button>
                            <div className='camp-container' style={{display:'grid'}} >
                                {myCampaigns.map((campaign) => {
                                    return(
                                        <Box onClick={() => navigate("/detailView", { state: { currentCamp: campaign }})}>
                                        <CampListItem
                                            year="2022"
                                            title={campaign.campaignName.toString()}
                                            budget={campaign.budget.toString()}
                                            end={campaign.endDate.toString()} /></Box>
                                )})}
                            </div>
                        </div>
                    </CampaignContainer>
                </Paper>
                <Paper sx={{width: '100vw', margin: 1}}>
                <OtherContainer>  
                        <Typography variant='h5'>
                            Ad Revenue 
                        </Typography>
                        <Paper sx={{margin: 1}}>
                        <Typography variant='h5' color='#00C832'>
                        ${budgetTotal}
                        </Typography>
                        </Paper>
                    <GraphContainer> 
                        <h5 style={{textAlign: 'left'}}> Revenue Distribution </h5>
                        <Graph inStoreRevenue={inStoreCalculation(myCampaigns)} offSiteRevenue={offSiteCalculation(myCampaigns)} onSiteRevenue={onSiteCalculation(myCampaigns)}></Graph>
                    </GraphContainer>
                </OtherContainer>
                </Paper>
            </MidContainer>
            </ThemeProvider>
        </Container>
    );
}

export default Dashboard;