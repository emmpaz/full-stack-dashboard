import React from 'react';
import UploadModule from '../components/upload_module';
import { Campaign } from '../helper files/types';

export const UploadPage = (newCampaign: Campaign) => {
    
    
    return(
        <UploadModule currentCamp={newCampaign}/>
    )
}