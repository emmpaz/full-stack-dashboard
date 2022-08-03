import React, { useEffect, useState } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import { Campaign } from '../helper files/types';
import { CreateCampaignComp } from '../components/createCampaignComp';
import { Box, FormControl, Input, InputLabel, MenuItem, Select, TextField } from '@mui/material';

const UpdateCampaign = () => {
    const navigate = useNavigate();

    const { state } = useLocation();
    const campaign = state as any;
    const currentCampaign = campaign.currentCamp.currentCamp;
    const [newCampaign, setNewCampaign] = useState<Campaign>(campaign);

    console.log(campaign.currentCamp.currentCamp);

    console.log(campaign.currentCamp.currentCamp.campaignName);
    


    const handleInputChange = (e: any) => {
        const { name, value } = e.target;
        
        setNewCampaign((prevState) => ({
          ...prevState,
          [name]:value
        }));
      };

    const handleSubmit = () => {
        const axios = require('axios')
        axios.post('https://ps-springboot.azurewebsites.net/campaign', newCampaign)
    }

    return(
            <div>
                <h1>Update Campaign</h1>
                <Box>
                    <TextField label="Campaign Name" type="text" value={currentCampaign.campaignName}></TextField><br/>
                    <TextField label="Client Name" type="text" value={currentCampaign.company}></TextField>
                </Box>
            </div>
    )

}
export default UpdateCampaign;