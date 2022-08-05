import axios from 'axios';
import { Button, Input, Paper } from '@mui/material';
import React, { useEffect, useState } from 'react';
import uploadFileToBlob, { isStorageConfigured } from '../azure-storge-blob';
import Path from 'path';
import AliceCarousel from 'react-alice-carousel';
import Carousel from 'react-material-ui-carousel';
import { Campaign } from '../helper files/types';
import { useNavigate, useLocation } from 'react-router-dom';
import { defaultCampaign } from './createCampaignComp';

const storageConfigured = isStorageConfigured();
const UploadModule = () => {
    // all blobs in container
    const [blobList, setBlobList] = useState<string[]>([]);
    // current file to upload into container
    const [fileSelected, setFileSelected] = useState(null);

    const navigate = useNavigate();

    const [currentCampaign, setCurrentCampaign] = useState<Campaign>(defaultCampaign);
    
    const { state } = useLocation();
    var tmpCampaign = (state as any).campaign;
   // setCurrentCampaign((state as any).campaign);

    // UI/form management
    const [uploading, setUploading] = useState(false);
    const [inputKey, setInputKey] = useState(Math.random().toString(36))
    const [campId, setCampId] = useState(1165);

    const [campaigns, setCampaigns] = useState<Campaign[]>([]);


    useEffect(() => {
      fetchCampaigns();
    }, [])

    const fetchCampaigns = () => {
      axios.get('https://ps-springboot.azurewebsites.net/campaign').then((res) => {
      //console.log(res);
      setCampaigns(res.data);
      //console.log(res.data);


      for(let i=0;i<res.data.length;i++) {
          console.log(tmpCampaign.campaignName);
          if(res.data[i].campaignName == tmpCampaign.campaignName){
            setCampId(res.data[i].campaignId);
          }
      }

      })
      .catch((err) => {
      //console.log(err);
      });
     

  };

    const onFileChange = (event: any) => {
        // capture file into state
        setFileSelected(event.target.files[0]);
    };

    const onFileUpload = async () => {
        // prepare UI
        setUploading(true);
    
        // *** UPLOAD TO AZURE STORAGE ***
        const blobsInContainer: string[] = await uploadFileToBlob(fileSelected);
    
        // prepare UI for results
        setBlobList(blobsInContainer);
    
        // reset state/form
        setFileSelected(null);
        setUploading(false);
        setInputKey(Math.random().toString(36));
      };

      const DisplayForm = () => (
        <div>
          <Input type="file" onChange={onFileChange} key={inputKey || ''} />
            <Button type="submit" onClick={onFileUpload}>
                Add File
            </Button>
            <Button type="submit" onClick={() => navigate("/dashboard", {state: {bannerId : 1}})}>Return to Dashboard</Button>
        </div>
      )
      
      const DisplayImagesFromContainer = () => {
        updateDB();
        return (
          <Carousel>
            {blobList.map((item) => (
                <img src={item} width="500px" />                
            ))}
          </Carousel>
      )};
     
      const updateDB = () => (
<>
           {blobList.map((item: any) => (
                axios.post('http://ps-springboot.azurewebsites.net/images',{ "campaignId" : campId, "imageUrl" : item}
            ).then(res => 
            {
              })))}
              </>
      );

  return (
    <Paper elevation={3} sx={{p:2}}>
      <h1>Upload Campaign Media</h1>
      {storageConfigured && !uploading && DisplayForm()}
      {storageConfigured && uploading && <div>Uploading</div>}
      <hr />
      {storageConfigured && blobList.length > 0 && DisplayImagesFromContainer()}
      {!storageConfigured && <div>Storage is not configured.</div>}
    </Paper>
  );
};

export default UploadModule;

