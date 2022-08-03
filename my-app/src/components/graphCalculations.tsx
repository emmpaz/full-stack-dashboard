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

// function GraphCalcs () {

//     const [myCampaigns, setCampaigns] = useState<Campaign[]>([]);

//     const onSiteRevenue = 0;
//     const offSiteRevenue = 0;
//     const inStoreRevenue = 0;

//     const runAll = () => {
//         fetchCampaigns();
//         onSiteCalculation();
//         offSiteCalculation();
//         inStoreCalculation();
//     }

//     useEffect(() => {
//         runAll();
//     })

//     const onSiteCalculation = () => {
//         //fetchCampaigns();
    
//         var onSiteRevenue = 0;
    
//         myCampaigns.forEach( (element) => {
//             if(element.channel == "On-Site")
//                 onSiteRevenue+=element.budget;
//         })
    
//        // return onSiteRevenue;
//     }
    
//     const offSiteCalculation = () => {
//         //fetchCampaigns();
    
//         var offSiteRevenue = 0;
    
//         myCampaigns.forEach( (element) => {
//             if(element.channel == "Off-Site")
//                 offSiteRevenue+=element.budget;
//         })
    
//        // return offSiteRevenue;
//     }
    
//     const inStoreCalculation = () => {
//        // fetchCampaigns();
    
//         var inStoreRevenue = 0;
    
//         myCampaigns.forEach( (element) => {
//             if(element.channel == "In-Store")
//                 inStoreRevenue+=element.budget;
//         })
//     }


//     const fetchCampaigns = () => {
//         const [myCampaigns, setCampaigns] = useState<Campaign[]>([]);

//         axios.get(`https://ps-springboot.azurewebsites.net/campaigns`).then((res) => {
//         console.log(res);
//         setCampaigns(res.data);
//         })
//         .catch((err) => {
//         console.log(err);
//         });
//     };
// }

// export default GraphCalcs;