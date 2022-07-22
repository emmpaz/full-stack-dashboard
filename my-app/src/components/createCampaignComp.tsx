import React, { useState } from 'react';
import axios from 'axios';
import { Box, Button, Input, Select, MenuItem, InputLabel, FormControl } from '@mui/material';
import { Campaign } from '../helper files/types';

const defaultCampaign: Campaign = {
    managerId: 123,
    banner: '',
    company: '',
    channel: '',
    budget: 0,
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
            <Input style ={{width: '100%'}} type="text" name="campaignName" placeholder="Campaign Name" value={newCampaign.campaignName} onChange={handleInputChange}></Input><br />
            <Input style ={{width: '100%'}} type="text" name="company" placeholder="Client Name" value={newCampaign.company} onChange={handleInputChange}></Input><br />
            <FormControl style ={{width: '100%'}} variant="standard">
              <InputLabel id="banner_id">Banner</InputLabel>
              <Select style ={{width: '100%'}} labelId="banner_id" name="banner" value={newCampaign.banner} onChange={handleInputChange}>
                <MenuItem value="Fresh Direct">Fresh Direct</MenuItem>
                <MenuItem value="Food Lion">Food Lion</MenuItem>
                <MenuItem value="Stop and Shop">Stop and Shop</MenuItem>
                <MenuItem value="The Giant Company">The Giant Company</MenuItem>
                <MenuItem value="Giant">Giant</MenuItem>
                <MenuItem value="Hannaford">Hannaford</MenuItem>
              </Select>
            </FormControl> <br />
            <FormControl style ={{width: '100%'}} variant="standard">
              <InputLabel id="channel_id">Channel</InputLabel>
              <Select style ={{width: '100%'}} label="channel" name="channel" value={newCampaign.channel} onChange={handleInputChange}>
                <MenuItem value="On-Site">On-Site</MenuItem>
                <MenuItem value="Off-Site">Off-Site</MenuItem>
                <MenuItem value="In-Store">In-Store</MenuItem>
            </Select></FormControl> <br />
            <Input style ={{width: '100%'}} type="number" name="budget" value={newCampaign.budget} onChange={handleInputChange}></Input><br />
            <InputLabel>Campaign Dates</InputLabel>
            <Input style={{width: '72%'}} type="date" name="startDate" value={newCampaign.startDate} onChange={handleInputChange}></Input>
            <p><small>to</small></p>
            <Input style={{width: '72%'}} type="date" name="endDate" value={newCampaign.endDate} onChange={handleInputChange}></Input><br />
            <Button type="submit" onClick={handleSubmit}>Submit</Button>
        </Box>
    )
}

export default CreateCampaignComp;
