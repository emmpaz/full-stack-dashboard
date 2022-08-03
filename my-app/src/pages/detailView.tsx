import { Box, Paper, Typography, BoxProps, Grid, checkboxClasses, Fab, Button } from '@mui/material';
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
import { OnSiteOptions, WebLocation, TargetAge, TargetRegion, SocialMedia, InStoreOptions, StoreLocation } from '../helper files/channelHelper';

const DetailView = () => {
    const { state } = useLocation();
    const campaign = state as any;
    const [campaigns, setCampaigns] = useState<Campaign[]>([]);
    const navigate = useNavigate();

    const [channelSelectionOption, setchannelSelectionOption] = useState<JSX.Element>();

    var clientAdRev = 0;
    var calculated = false;
    var initBannerId = campaign.currentCamp.bannerId;

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


    const deleteCampaign = () => {
        var id = campaign.currentCamp.campaignId;
        
        axios.delete(`http://localhost:8080/campaign/${id}`).then((res) => {
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
            <div>
            <Grid display="flex" justifyContent="center" alignItems="center" container direction="row" sx={{margin: 'auto'}}>
                <Paper elevation={3} sx={{borderRadius: 5, margin: 2}}>
                    <Box p={3} sx={{width: '350px'}}>
                        <Typography variant='h5'>{campaign.currentCamp.campaignName}</Typography>           
                        <Typography variant='h6'>{campaign.currentCamp.company}</Typography>
                        <Typography variant='body2'>{campaign.currentCamp.startDate} {' '} to {' '} {campaign.currentCamp.endDate}</Typography>
                        <Typography variant='body1' color='#00C832 !important'>Budget: {' $'}{campaign.currentCamp.budget}</Typography>
                    </Box>
                </Paper>
                <Paper elevation={3} sx={{borderRadius: 5, margin: 7}}>
                    <Box p={3} sx={{width: '350px'}}>
                        <Typography variant='h5'>Preview</Typography>
                        <Typography variant='body1'>Channel: {campaign.currentCamp.channel}</Typography>
                        <Typography>{OnSiteOptions(campaign.currentCamp)}</Typography>
                        <Typography>{SocialMedia(campaign.currentCamp)}</Typography>
                        <Typography>{WebLocation(campaign.currentCamp)}</Typography>
                        <Typography>{TargetAge(campaign.currentCamp)}</Typography>
                        <Typography>{TargetRegion(campaign.currentCamp)}</Typography>
                        <Typography>{InStoreOptions(campaign.currentCamp)}</Typography>
                        <Typography>{StoreLocation(campaign.currentCamp)}</Typography>
                    </Box>
                </Paper>
                <Paper elevation={3} sx={{borderRadius: 5}}>
                    <Box p={3} sx={{width: '350px'}}>
                        <Typography variant='h5'>{campaign.currentCamp.company}</Typography>
                    </Box>
                    <Box p={3}>
                        <Typography variant='h6'>Ad Revenue: </Typography>
                        <Typography variant='h4' color='#00C832 !important'>{'$'}{calculateClientRevenue()}</Typography>
                    </Box>
                </Paper>
            </Grid>
            <Button variant="contained" color="success" onClick={() => navigate("/updateCampaign", { state: { campaign }})}>Edit Campaign</Button>
            <Button variant="contained" color="error" onClick={deleteCampaign}>Delete Campaign</Button>
        </div></div>
        
    )
}

export default DetailView;