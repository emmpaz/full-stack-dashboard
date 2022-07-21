import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { Campaign } from '../helper files/types';
import { CreateCampaignComp } from '../components/createCampaignComp';

const CreateCampaign = () => {
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
        isActive: true,
    }

    /*axios({
        method: 'post',
        url: 'https://ps-springboot.azurewebsites.net/campaign',
        data: formData
    })
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    })
*/
    
        /*setCampValue((prevState) => {
            return {
                ...prevState,
                [name]: value,
            };
        });*/
    ;

    const handleSubmit = () => {
        const axios = require('axios')
        axios.post('https://ps-springboot.azurewebsites.net/campaign', formData)
    }

    


    /*
    axios({
        method: "post",
        url: 'https://ps-springboot.azurewebsites.net/campaign',
        data: bodyFormData,
        headers: {"Content-Type": "multipart/form-data"},
    }).then(function (response) {
        console.log(response);
    }).catch(function (response) {
        console.log(response);
    });*/



    return(
        <div>
            <h1>Create New Campaign</h1>
            <CreateCampaignComp />
        </div>
    );

}
export default CreateCampaign;