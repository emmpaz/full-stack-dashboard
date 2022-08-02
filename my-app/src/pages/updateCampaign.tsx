import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { Campaign } from '../helper files/types';
import { CreateCampaignComp } from '../components/createCampaignComp';

const UpdateCampaign = () => {
    const navigate = useNavigate();
    const formData = {
        managerId: 123,
        banner: '',
        company: '',
        channel: '',
        budget: 10000.00,
        campaignName: '',
        startDate: 2022-12-12,
        endDate: 2023-1-12,
        isActive: false,
    }

    const handleSubmit = () => {
        const axios = require('axios')
        axios.post('https://ps-springboot.azurewebsites.net/campaign', formData)
    }

    return(
        <div>
            <h1>Create New Campaign</h1>
            <CreateCampaignComp />
        </div>
    );

}
export default UpdateCampaign;