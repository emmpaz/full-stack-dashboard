import { Box, Paper, Typography, BoxProps, Grid, checkboxClasses, Fab, Button, ThemeProvider, ButtonGroup } from '@mui/material';
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

const DetailView = () => {
    const { state } = useLocation();
    const campaign = state as any;
    const [campaigns, setCampaigns] = useState<Campaign[]>([]);
    const [filteredCampaigns, setFilteredCampaigns] = useState<Campaign[]>([]);
    const navigate = useNavigate();

    const [channelSelectionOption, setchannelSelectionOption] = useState<JSX.Element>();

    var clientAdRev = 0;
    var calculated = false;
    var initBannerId = campaign.currentCamp.bannerId;

   /* function sortCampaignes(): Campaign[] {
        filteredcampaigns.forEach( (element) => {
            if(element.company == campaign.currentCamp.company) {
                // this.setState((filteredcampaigns: any)=>({
                //     currentCompany: [...filteredcampaigns, element.company]
                // }));
                setCampaignss(currentCompany => [...currentCompany, campaign.currentCamp.company]);
                // currentCompany.push(campaign.currentCamp.company);
                // setCampaignss(currentCompany);
            }
        })
        return currentCompany;

    }*/

    function sortedCampaigns(): Campaign[] {
        let filteredCamps: Campaign[] = [];
        campaigns.forEach( (element) => {
            if(element.company == campaign.currentCamp.company) {
                filteredCamps.push(element);
            }
        })
        return filteredCamps;
    }

    function calculateClientRevenue(): number {
        campaigns.forEach( (element) => {
            if(element.company == campaign.currentCamp.company) {
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
        })
        .catch((err) => {
        //console.log(err);
        });
       /* if(calculated == false) {
            calculateClientRevenue();
        }*/
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
                    <Fab style={{
                        marginRight: '30px',
                        marginTop: '30px'
                    }} onClick={() => navigate("/dashboard", {state: {bannerId : campaign.currentCamp.bannerId}})}>
                        <CloseIcon />
                    </Fab>
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
                                <img src={testImage} className="test-image"/>     
                                <Typography variant='h5'>Dates:</Typography>
                                <Typography variant='h6' sx={{marginBottom: '15px'}}>{campaign.currentCamp.startDate} to {campaign.currentCamp.endDate}</Typography>
                                <Typography variant='h5'>Channel(s):</Typography>
                                <Typography sx={{marginBottom: '15px'}}>{campaign.currentCamp.channel}</Typography>
                                <Typography variant='h5'>Copy:</Typography>
                                <Typography align='left'>{campaign.currentCamp.copy}</Typography>
                            </div>
                        </Paper>
                        <Paper elevation={3} sx={{borderRadius: 5, marginTop:'15px'}}>
                            <div style={{display: 'grid', justifyItems: 'start', paddingLeft:'20px', paddingTop: '15px', paddingBottom:'20px'}}>
                                <Typography variant='h2'>Campaign Images</Typography>
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
                <ButtonGroup disableElevation variant="contained" sx={{margin:'30px 0 30px 0'}}>
                    <Button variant="outlined" color="success" onClick={() => navigate("/updateCampaign", {state: {currentCampaign : campaign.currentCamp}})}>Edit Campaign</Button>
                    <Button variant="outlined" color="error" onClick={deleteCampaign}>Delete Campaign</Button>
                </ButtonGroup>
            
            </ThemeProvider>
            </BigContainer>
        </div>
        
    )
}

export default DetailView;