import { Box, Paper, Typography, BoxProps, Grid, checkboxClasses, Fab, Button, ThemeProvider, ButtonGroup, Tooltip } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { BigContainer, CampaignContainer, GraphContainer } from '../components/containers';
import { CampListItem } from '../components/func_camp_list';
import { Campaign } from '../helper files/types';
import '../css files/detailedView.css';
import CloseIcon from '@mui/icons-material/Close';
import logo from '../assets/images/ourLogo.png';
import { useNavigate } from 'react-router-dom';
import { OnSiteOptions, WebLocation, TargetAge, TargetRegion, SocialMedia, InStoreOptions, StoreLocation } from '../helper files/channelHelper';
import testImage from '../assets/images/test.jpg';
import JoshTheme from '../css files/allStyle';
import Graph from '../components/graph';
import { inStoreCalculation, offSiteCalculation, onSiteCalculation } from '../components/graphCalculations';
import { red } from '@mui/material/colors';
import { green } from '@mui/material/colors';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';

const DetailView = () => {
    const { state } = useLocation();
    const campaign = state as any;
    const [campaigns, setCampaigns] = useState<Campaign[]>([]);
    const [filteredCampaigns, setFilteredCampaigns] = useState<Campaign[]>([]);
    const [campId, setCampId] = useState(0);
    const [url, setUrl] = useState("");
    const [set, setSet] = useState(false);
    const navigate = useNavigate();

    const [channelSelectionOption, setchannelSelectionOption] = useState<JSX.Element>();

    var clientAdRev = 0;
    var calculated = false;
    var initBannerId = campaign.currentCamp.bannerId;

    function sortedCampaigns(): Campaign[] {
        let filteredCamps: Campaign[] = [];
        campaigns.forEach( (element) => {
            if(element.company == campaign.currentCamp.company && element.banner == campaign.currentCamp.banner) {
                filteredCamps.push(element);

            }
        })
        return filteredCamps;
    }

    const getUrls = () => {
        if(set == false) {
            axios.get(`https://ps-springboot.azurewebsites.net/images/${campId}`).then((res) => {
               // return res.data[0];
               setUrl(res.data[res.data.length-1]);
            //  console.log(res.data[0]);

            });
            setSet(true);
    }}

    function returnUrl(): string {
        return ((getUrls() as unknown) as string);
        
    }

    function calculateClientRevenue(): number {
        campaigns.forEach( (element) => {
            if(element.company == campaign.currentCamp.company && element.banner == campaign.currentCamp.banner) {
                clientAdRev = clientAdRev + element.budget;
            }
        })
        calculated = true;
        return clientAdRev;
    }


    const fetchCampaigns = () => {
        axios.get('https://ps-springboot.azurewebsites.net/campaign').then((res) => {
        //console.log(res);
        setCampaigns(res.data);
        
        for(let i=0;i<res.data.length;i++) {
            if(res.data[i].campaignName == campaign.currentCamp.campaignName)
              setCampId(res.data[i].campaignId);  
              break;      
        }

        })
        .catch((err) => {
        });

        getUrls();
    };

    const getImageUrls = () => {
        
    }


    const deleteCampaign = () => {
        var id = campaign.currentCamp.campaignId;
        
        axios.delete(`https://ps-springboot.azurewebsites.net/campaign/${id}`).then((res) => {
            setCampaigns(res.data);
        })
        .catch((err) => {
            console.log(err);
        })

        navigate("/dashboard", {state: {bannerId : initBannerId}});

    };
    
    useEffect(() => {
       // console.log(campaign.currentCamp);
        fetchCampaigns();
    })
    
    
    return(
        <div className="detailedView-background">
            <div className="header">
                <img className="ahold-logo" src={logo}/>
                <div className="arrow-back">
                <ButtonGroup disableElevation variant="contained">
                    <Tooltip title="Edit Campaign">
                        <Fab color="primary" style={{
                            marginRight: '10px',
                            marginTop: '30px'
                        }} onClick={() => navigate("/updateCampaign", {state: {currentCampaign : campaign.currentCamp}})}>
                            <EditIcon />
                        </Fab>
                    </Tooltip>
                    <Tooltip title="Delete Campaign">   
                        <Fab color="error" style={{
                            marginRight: '10px',
                            marginTop: '30px'
                        }} onClick={deleteCampaign}>
                            <DeleteForeverIcon />
                        </Fab>
                    </Tooltip>
                    <Tooltip title="Close">
                        <Fab style={{
                            marginRight: '95px',
                            marginTop: '30px'
                        }} onClick={() => navigate("/dashboard", {state: {bannerId : campaign.currentCamp.bannerId}})}>
                            <CloseIcon />
                        </Fab>
                    </Tooltip>
                </ButtonGroup>
                </div>
            </div>
            <BigContainer>
            <ThemeProvider theme={JoshTheme}>
                <div style={{display:'flex', justifyContent:'center'}}>
                    <Grid container direction="column" sx={{margin: '10px'}}>
                        <Paper elevation={3} sx={{borderRadius: 5}}>
                            <div style={{display: 'grid', justifyItems: 'start', paddingLeft:'20px', paddingTop: '15px', paddingBottom:'20px'}}>
                                <Typography variant='h2'>{campaign.currentCamp.campaignName}</Typography>
                                <Typography variant='h6'>{campaign.currentCamp.company}</Typography>
                                <img src={url} className="test-image"/>     
                                <Typography variant='h5'>Dates:</Typography>
                                <Typography variant='h6' sx={{marginBottom: '15px'}}>{campaign.currentCamp.startDate} to {campaign.currentCamp.endDate}</Typography>
                                <Typography variant='h5'>Channel(s):</Typography>
                                <Typography sx={{marginBottom: '15px'}}>{campaign.currentCamp.channel}</Typography>
                                <Typography variant='h5'>Copy:</Typography>
                                <Typography align='left'>{campaign.currentCamp.copy}</Typography>
                            </div>
                        </Paper>
                    </Grid>
                    <Grid direction="column" container sx={{margin: '10px'}}>
                        <Paper elevation={3} sx={{borderRadius: 5}}>
                            <div style={{display: 'grid', justifyItems: 'start', paddingLeft:'20px', paddingTop: '15px', paddingBottom:'20px'}}>
                                <Typography variant='h2'>Campaign Info</Typography>
                                <Typography variant='h5' sx={{margin:'15px 0 10px 0'}}>Budget:</Typography>
                                <Typography >${campaign.currentCamp.budget}</Typography>
                                <Typography variant='h5' sx={{margin:'15px 0 10px 0'}}>Demographics:</Typography>
                                <Typography sx={{margin:'0 0 15px 0'}}>{campaign.currentCamp.targetRegion}, {campaign.currentCamp.targetAge}</Typography>
                            </div>
                        </Paper>
                        <Paper elevation={3} sx={{borderRadius: 5, marginTop: '15px'}}>
                            <Box p={3}>
                                <Typography>{TargetAge(campaign.currentCamp)}</Typography>
                                <Typography>{TargetRegion(campaign.currentCamp)}</Typography>
                            </Box>
                            <Box p={3}>
                                <Typography variant='h6'>Ad Revenue: </Typography>
                                <Typography variant='h4' color='#00C832 !important'>{'$'}{calculateClientRevenue()}</Typography>
                                <Graph inStoreRevenue={inStoreCalculation(sortedCampaigns())} offSiteRevenue={offSiteCalculation(sortedCampaigns())} onSiteRevenue={onSiteCalculation(sortedCampaigns())}></Graph>
                            </Box>
                        </Paper>
                    </Grid>
                </div>
            </ThemeProvider>
            </BigContainer>
            <Button variant="contained" color="success" onClick={() => navigate("/updateCampaign", {state: {currentCampaign : campaign.currentCamp}})}>Edit Campaign</Button>
            <Button variant="contained" color="error" onClick={deleteCampaign}>Delete Campaign</Button>
        </div>
        
    )
}

export default DetailView;