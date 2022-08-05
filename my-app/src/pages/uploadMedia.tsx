import { ThemeProvider } from '@emotion/react';
import React from 'react';
import UploadModule from '../components/upload_module';
import JoshTheme from '../css files/allStyle';
import { Campaign } from '../helper files/types';

export const UploadPage = (newCampaign: Campaign) => {
    
    
    return(
        <UploadModule />
    )
}