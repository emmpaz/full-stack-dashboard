import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Campaign } from "./types";
import {useIsMount} from '../helper files/mounting';


export const getCampaigns = () => {
const [myCampaigns, setCampaigns] = useState<Campaign[]>([]);

    useEffect(() => {
        if (useIsMount()) {
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

    const fetchCampaignsByBanner = (bannerId: number) => {
        axios.get(`https://ps-springboot.azurewebsites.net/banner/${bannerId}`).then((res) => {
            console.log(res);

            setCampaigns(res.data);
        })
        .catch((err) => {
            console.log(err);
        });
    };

}