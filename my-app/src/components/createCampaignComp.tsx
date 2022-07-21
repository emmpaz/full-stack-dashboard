import React, { useState } from 'react';
import axios from 'axios';
import { Button, Input } from '@mui/material';
import { Campaign } from '../helper files/types';

export const CreateCampaignComp = () => {
    const newCampaign: Campaign = {
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
    
    // const {
    //     managerId: 123,
    //     banner: '',
    //     company: '',
    //     channel: '',
    //     budget: 10000.00,
    //     campaignName: '',
    //     startDate: 2022-12-12,
    //     endDate: 2023-1-12,
    //     isActive: true,
    // }

    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();

    //    var campaign = {
    //         managerId: this.state.managerId,
    //         banner: this.state.banner,
    //         company: this.state.company,
    //         channel: this.state.channel,
    //         budget: this.state.budget,
    //         campaignName: this.state.campaignName,
    //         startDate: this.state.startDate,
    //         endDate: this.state.endDate,
    //         isActive: this.state.isActive,
    //     };

        axios.post('https://ps-springboot.azurewebsites.net/campaign', newCampaign)
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    }
    
    return (
        <div>
            <label>
                Campaign Name:
                <Input type="text" name="campaignName" placeholder="Campaign Name"  value={newCampaign.campaignName}></Input>
            </label><br/>
            <label>
                Client Name:
                <Input type="text" name="company" placeholder="Client Name"></Input>
            </label><br/>
            <label>
                Channel:
                <Input type="text" name="channel" placeholder="Channel"></Input>
            </label><br/>
            <label>
                Budget:
                <Input type="number" name="budget" placeholder="1000.00"></Input>
            </label><br/>
            <label>
                Start Date:
                <Input type="date" name="startDate"></Input>
            </label><br/>
            <label>
                End Date:
                <Input type="date" name="endDate"></Input>
            </label><br/>
            <Button type="submit" onClick={handleSubmit}>Submit</Button>
        </div>
    )
}

export default CreateCampaignComp;

