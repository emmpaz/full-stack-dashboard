import { Box, Paper, Typography, BoxProps, Grid, checkboxClasses, Fab } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { CampaignContainer, GraphContainer } from '../components/containers';
import { CampListItem } from '../components/func_camp_list';
import { Campaign } from '../helper files/types';
import '../css files/detailedView.css';
import CloseIcon from '@mui/icons-material/Close';
import aholdLogo from '../assets/images/transparentAhold.png';
import { useNavigate } from 'react-router-dom';

const DetailView = () => {
    const { state } = useLocation();
    const campaign = state as any;
    const [campaigns, setCampaigns] = useState<Campaign[]>([]);
    const navigate = useNavigate();

    var clientAdRev = 0;
    var calculated = false;

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
    
    useEffect(() => {
       // console.log(campaign.currentCamp);
        fetchCampaigns();
    })
    
    
    return(
        <div className="detailedView-background">
            <div className="header">
                <img className="ahold-logo" src={aholdLogo}/>
                <div className="arrow-back">
                    <Fab style={{
                        marginRight: '30px',
                        marginTop: '30px'
                    }} onClick={() => navigate("/dashboard", {state: {bannerId : campaign.currentCamp.bannerId}})}>
                        <CloseIcon />
                    </Fab>
                </div>
            </div>
            <Grid container direction="row">
                <Paper elevation={3} sx={{borderRadius: 5, margin: 2}}>
                    <Box p={3}>
                        <Typography variant='h5'>{campaign.currentCamp.campaignName}</Typography>           
                        <Typography variant='h6'>{campaign.currentCamp.company}</Typography>
                        <Typography variant='body2'>{campaign.currentCamp.startDate} {' '} to {' '} {campaign.currentCamp.endDate}</Typography>
                        <Typography variant='body1' color='#00C832 !important'>Budget: {' $'}{campaign.currentCamp.budget}</Typography>
                    </Box>
                </Paper>
                <Paper elevation={3} sx={{borderRadius: 5, margin: 7}}>
                    <Box p={3}>
                        <Typography variant='h5'>Preview</Typography>
                    </Box>
                </Paper>
                <Paper elevation={3} sx={{borderRadius: 5}}>
                    <Box p={3}>
                        <Typography variant='h5'>{campaign.currentCamp.company}</Typography>
                        <Typography></Typography>
                    </Box>
                    <Box p={3}>
                        <Typography variant='h5'>{'$'}{calculateClientRevenue()}</Typography>
                    </Box>
                </Paper>
            </Grid>
        </div>
        
    )
}

export default DetailView;