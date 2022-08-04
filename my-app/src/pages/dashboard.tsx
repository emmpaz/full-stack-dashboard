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
import { Fab, Grid, Paper, Tabs, ThemeProvider, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';
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
    const [isActive, setActive] = useState<Boolean>(true);

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

        if(activeUpdated == false) {
            updateActivity(active_or_not, initBannerId);
            setActiveUpdated(true);
        }

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
        <BigContainer>
            <ThemeProvider theme={JoshTheme}>
            <TitleContainer> 
            <img className="ahold-logo-dashboard" src={aholdLogo}/>
            <Box sx={{ float: 'right', minWidth: 120 }}>
                <FormControl style ={{width: '100%'}} variant="standard">
                    <InputLabel id="banner_id">Banner</InputLabel>
                    <Select style ={{width: '100%'}} labelId="banner_id" name="banner" onChange={bannerSelectHandler}>
                        <MenuItem value={1}>Fresh Direct</MenuItem>
                        <MenuItem value={2}>Food Lion</MenuItem>
                        <MenuItem value={3}>Stop and Shop</MenuItem>
                        <MenuItem value={4}>The Giant Company</MenuItem>
                        <MenuItem value={5}>Giant</MenuItem>
                        <MenuItem value={6}>Hannaford</MenuItem>
                        <MenuItem sx={{ color: '#00C832 !important' }} value="7">Logout</MenuItem>
                    </Select>
                </FormControl>
            </Box>
            </TitleContainer>
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
                                        <ToggleButton value = "active" onClick={activeCampaignsHandler}>Active</ToggleButton>
                                        <ToggleButton value = "archive" onClick={archivedCampaignsHandler}>Archive</ToggleButton>
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
                            {/*
                            <Tabs
                            orientation="vertical">
                                <Button variant={(isActive) ? "contained" : "text"} onClick={activeCampaignsHandler}>Active</Button>
                                <Button variant={(!isActive) ? "contained" : "text"} onClick={archivedCampaignsHandler}>Archived</Button>
                            </Tabs>
                            <Button fullWidth onClick={() => navigate("/createCampaign", { state: { bannerId: initBannerId }})}>
                                    Create Campaign 
                                <AddCircleOutlineOutlinedIcon/>
                            </Button>*/}
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
                <Paper elevation={4} sx={{width: '100vw', margin: 1}}>
                <OtherContainer> 
                    <RevContainer> 
                        <h1> Ad Revenue </h1>
                        <Paper>
                        <Typography variant='h4' color='#00C832 !important'>${budgetTotal}</Typography>
                        </Paper>
                    </RevContainer>
                    <GraphContainer> 
                        <h1> Revenue Distribution </h1>
                        <Graph inStoreRevenue={inStoreCalculation(myCampaigns)} offSiteRevenue={offSiteCalculation(myCampaigns)} onSiteRevenue={onSiteCalculation(myCampaigns)}></Graph>
                    </GraphContainer>
                </OtherContainer>
                </Paper>
            </MidContainer>
            </ThemeProvider>
        </BigContainer>
    );
}

export default Dashboard;