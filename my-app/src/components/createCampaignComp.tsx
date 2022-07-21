import React, { useState } from 'react';
import axios from 'axios';
import { Box, Button, Input } from '@mui/material';
import { Campaign } from '../helper files/types';

const defaultCampaign: Campaign = {
    managerId: 123,
    banner: '',
    company: '',
    channel: '',
    budget: 10000.00,
    campaignName: '',
    startDate: new Date(2022-12-12),
    endDate: new Date(2023-1-12),
    isActive: true,
}

export const CreateCampaignComp = () => {
    const [newCampaign, setNewCampaign] = useState<Campaign>(defaultCampaign)

    const handleInputChange = (e: any) => {
        const { name, value } = e.target;
        setNewCampaign({
          ...newCampaign,
          [name]: value,
        });
      };

    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();

        axios.post('https://ps-springboot.azurewebsites.net/campaign', newCampaign)
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    }
    
    return (
        <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
            <Input type="text" name="campaignName" placeholder="Campaign Name" value={newCampaign.campaignName} onChange={handleInputChange}></Input><br />
            <Input type="text" name="company" placeholder="Client Name" value={newCampaign.company} onChange={handleInputChange}></Input><br />
            <Input type="text" name="channel" placeholder="Channel" value={newCampaign.channel} onChange={handleInputChange}></Input><br />
            <Input type="number" name="budget" placeholder="1000.00" value={newCampaign.budget} onChange={handleInputChange}></Input><br />
            <Input type="date" name="startDate" value={newCampaign.startDate} onChange={handleInputChange}></Input><br />
            <Input type="date" name="endDate" value={newCampaign.endDate} onChange={handleInputChange}></Input><br />
            <Button type="submit" onClick={handleSubmit}>Submit</Button>
        </Box>
    )
}

export default CreateCampaignComp;

