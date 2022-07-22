import * as React from 'react';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import ListItemButton from '@mui/material/ListItemButton';
import { Campaign } from '../helper files/types';
import { BrowserRouter as Router, useNavigate, Route, Routes } from 'react-router-dom';

export const CampaignList = (props: {campaign: Campaign}) => {
    const navigate = useNavigate();

    const { campaign } = props
    return(
        <Box sx={{ width: '100%', maxWidth: 360, borderRadius: 10, bgcolor: '#808080'}}>
                <List>
                    <ListItem disablePadding onClick={() => navigate("/detailView")}>  
                        <ListItemButton>
                            <ListItemText 
                                primary={campaign.campaignName}
                                sx={{ color: 'black' }} />
                        </ListItemButton>                   
                    </ListItem>
                </List>
        </Box>
    )
}