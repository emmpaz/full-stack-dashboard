import * as React from 'react';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import ListItemButton from '@mui/material/ListItemButton';
import { Campaign } from '../helper files/types';

export const CampaignList = (props: {campaign: Campaign}) => {
    const { campaign } = props
    return(
        <Box sx={{ width: '100%', maxWidth: 360, borderRadius: 10, bgcolor: '#808080'}}>
                <List>
                    <ListItem disablePadding>    
                        <ListItemButton>
                            <ListItemText 
                                primary={campaign.campaignName}
                                secondary={campaign.endDate.toString() + "  $" + campaign.budget}
                                
                                sx={{ color: 'black' }} />
                        </ListItemButton>                   
                    </ListItem>
                </List>
        </Box>
    )
}