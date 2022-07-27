import { Box, Paper, Typography, BoxProps, Grid } from '@mui/material';
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { CampaignContainer, GraphContainer } from '../components/containers';
import { CampListItem } from '../components/func_camp_list';
import { Campaign } from '../helper files/types';

const DetailView = () => {
    const { state } = useLocation();
    const campaign = state as any;
    
    useEffect(() => {
       // console.log(campaign.currentCamp);
        console.log(campaign.currentCamp.campaignName);
    })
    
    
    return(
        <div>
            <Grid container direction="row" spacing={20} sx={{ flexGrow: 1 }}>
                <Paper elevation={3} sx={{borderRadius: 5}}>
                    <Box p={3}>
                        <Typography variant='h5'>{campaign.currentCamp.campaignName}</Typography>           
                        <Typography variant='h6'>{campaign.currentCamp.company}</Typography>
                        <Typography variant='body2'>{campaign.currentCamp.startDate} {' '} to {' '} {campaign.currentCamp.endDate}</Typography>
                        <Typography variant='body1' color='#00C832 !important'>Budget: {' '} {campaign.currentCamp.budget}</Typography>
                    </Box>
                </Paper>
                <Paper elevation={3} sx={{borderRadius: 5}}>
                    <Box p={3}>
                        <Typography variant='h5'>Preview</Typography>
                    </Box>
                </Paper>
                <Paper elevation={3} sx={{borderRadius: 5}}>
                    <Box p={3}>
                        <Typography variant='h5'>{campaign.currentCamp.company}</Typography>
                    </Box>
                </Paper>
            </Grid>
        </div>
        
    )
}

export default DetailView;