import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Campaign } from "./types";

export const getCampains = () => {
const [myCampaigns, setCampaigns] = useState<Campaign[]>([]);

    useEffect(() => {
        if (isMount) {
            fetchCampaigns();
            console.log('fetching');
        } else {
        console.log('Subsequent Render');
        }
  });

    const fetchCampaigns = () => {
        axios.get('https://ps-springboot.azurewebsites.net/campaign').then((res) => {
        console.log(res);

        setCampaigns(res.data);
        })
        .catch((err) => {
        console.log(err);
        });
    };

}