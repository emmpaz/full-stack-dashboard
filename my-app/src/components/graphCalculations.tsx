import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Campaign } from '../helper files/types';

export function onSiteCalculation (campaigns: Campaign[]) {
    var onSiteRevenue = 0;
    campaigns.forEach( (element) => {
        if(element.channel == "On-Site")
            onSiteRevenue+=element.budget;
        })
    return onSiteRevenue;
}

export function offSiteCalculation (campaigns: Campaign[]) {
    var offSiteRevenue = 0;
    campaigns.forEach( (element) => {
        if(element.channel == "Off-Site")
            offSiteRevenue+=element.budget;
        })
    return offSiteRevenue;
}

export function inStoreCalculation (campaigns: Campaign[]) {
    var inStoreRevenue = 0;
    campaigns.forEach( (element) => {
        if(element.channel == "In-Store")
            inStoreRevenue+=element.budget;
    })
    return inStoreRevenue;
}
