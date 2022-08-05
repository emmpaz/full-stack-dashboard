import axios from 'axios';
import { Box, Button, Fab, Input, Paper, ThemeProvider, Typography } from '@mui/material';
import React, { useState } from 'react';
import uploadFileToBlob, { isStorageConfigured, setContainer} from '../azure-storge-blob';
import Path from 'path';
import AliceCarousel from 'react-alice-carousel';
import Carousel from 'react-material-ui-carousel';
import { Campaign } from '../helper files/types';
import JoshTheme from '../css files/allStyle';
import { height } from '@mui/system';
const storageConfigured = isStorageConfigured();
const UploadModule = (props:{ currentCamp : any}) => {
    // all blobs in container
    const [blobList, setBlobList] = useState<string[]>([]);
    // current file to upload into container
    const [fileSelected, setFileSelected] = useState(null);

    // UI/form management
    const [uploading, setUploading] = useState(false);
    const [inputKey, setInputKey] = useState(Math.random().toString(36))
    const [campId, setCampId] = useState(0);
    
    const currentCampaign = props.currentCamp as Campaign;

    const [campaigns, setCampaigns] = useState<Campaign[]>([]);

    const fetchCampaigns = () => {
      axios.get('https://ps-springboot.azurewebsites.net/campaign').then((res) => {
      setCampaigns(res.data);

      for(let i=0;i<res.data.length;i++) {
          if(res.data[i].campaignName == currentCampaign.campaignName)
            {setCampId(res.data[i].campaignId);
            setContainer(res.data[i].campaignId);}
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
        <ThemeProvider theme={JoshTheme}>
        <div>
          <label htmlFor="upload-photo">
          <input
            style={{ display: 'none' }}
            id="upload-photo"
            name="upload-photo"
            type="file"
            onChange={onFileChange}
            key={inputKey || ''}
          />

          <Button
            color="primary"
            size="small"
            component="span"
            variant="contained"
          >
            Upload Image
          </Button>
          </label>
          
        
          <Button type="submit" onClick={onFileUpload}>
            Add Image
          </Button>
        </div>
        </ThemeProvider>
      )
      
      const DisplayImagesFromContainer = () => {
        updateDB();
        return (
          <>
          <Box>
            <Carousel sx={{height: '500px'}} >
            {blobList.map((image_url) => (
                <img src={image_url} width='500px' />                
            ))}
          </Carousel>
          </Box>
          </>
      )};
     
      const updateDB = () => (
        <>
           {blobList.map((item: any) => (
                axios.post('http://ps-springboot.azurewebsites.net/images',{ "campaignId" : campId, "imageUrl" : item}
            ).then(res => 
            {
              console.log(item);
              console.log(campId);})))}
        </>
      );

  return (
    <>
    <Paper elevation={5} sx={{p:5}}>
    <ThemeProvider theme={JoshTheme}>
      <Typography variant='h3'>
        Upload Campaign Media
      </Typography>
      <Typography variant='h6'>
        Upload Images using 'Upload Image' and attatch to campaign using 'Add Image'
      </Typography>
        <br/>
        <br/>
    </ThemeProvider>
      {storageConfigured && !uploading && DisplayForm()}
      {storageConfigured && uploading && <div>Uploading</div>}
      <hr />
      {storageConfigured && blobList.length > 0 && DisplayImagesFromContainer()}
      {!storageConfigured && <div>Storage is not configured.</div>}
    <br></br>
    <ThemeProvider theme={JoshTheme}>
      <Button fullWidth size="large" variant="outlined">Submit Campaign</Button>
    </ThemeProvider>
    </Paper>
    </>
  );
};

export default UploadModule;
