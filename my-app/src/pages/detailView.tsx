import { Box, Paper, Typography, BoxProps } from '@mui/material';
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
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
            <Paper elevation={3} sx={{borderRadius: 5}}>
            <Box p={3}>
                <Typography variant='h4'>
                    {campaign.currentCamp.campaignName}
                </Typography>           
                <Typography variant='h5'>
                    {campaign.currentCamp.company}
                </Typography>
                <Typography variant='body1'>
                    {campaign.currentCamp.startDate} {' '} to {' '} {campaign.currentCamp.endDate}
                </Typography>
                <Typography variant='h6' color='#00C832 !important'>
                    Budget: {' '} {campaign.currentCamp.budget}
                </Typography>
            </Box></Paper>
            <Paper>
                <Box>
                    <p>slay</p>
                </Box>
            </Paper>
        </div>
    )
}

export default DetailView;