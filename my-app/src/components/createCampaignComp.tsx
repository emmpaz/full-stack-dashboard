import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Button, Input, Select, MenuItem, InputLabel, FormControl, TextField, Fab } from '@mui/material';
import { Campaign } from '../helper files/types';
import { OnsiteOptions } from './OnsiteOptions';
import { InStoreOptions } from './InStoreOptions';
import { SocialMedia } from './socialMedia';
import { useLocation, useNavigate } from 'react-router-dom';
import { CssTextField, ColorButton } from '../css files/customTextField';
import CloseIcon from '@mui/icons-material/Close';

const defaultCampaign: Campaign = {
    managerId: 123,
    banner: '',
    bannerId: 1,
    company: '',
    channel: '',
    budget: 0,
    campaignName: '',
    startDate: new Date(2022-12-12),
    endDate: new Date(2023-1-12),
    isActive: true,

    social: '',
    targetAge: '',
    targetRegion: '',
    onsiteOptions: '',
    websiteLocation: '',
    instoreOptions: '',
    storeLocation: '',
    copy: ''
}

export const CreateCampaignComp = () => {
    const [newCampaign, setNewCampaign] = useState<Campaign>(defaultCampaign);
    
    const { state } = useLocation();
    var initBannerId = (state as any).bannerId;
    

    const componentHandler = (name : string, value : string) => {

      setNewCampaign((prevState) => ({
        ...prevState,
        [name]:value
      }));

    }

    const navigate = useNavigate();
  
    //handles all inputs (campiagn name, client, budget, start/end date)
    const handleInputChange = (e: any) => {
        const { name, value } = e.target;
        
        setNewCampaign((prevState) => ({
          ...prevState,
          [name]:value
        }));
  
      };


      /**
       * add banner to new campaign and display the right banner option selected
       */
      const [bannerDisplay, setBannerDisplay] = useState<string>("");
      const handleBannerChange = (e: any) => {
        setBannerDisplay(e.target.value);

        const { name, value } = e.target;
        setNewCampaign((prevState) => ({
          ...prevState,
          [name]:value,
          bannerId:getBannerId(value)
        }));
      }

      /**
       * add channel to new campaign and display the right channel option selected
       * and the right options for corresponding channel
       */
      const [channelSelectionOption, setchannelSelectionOption] = useState<JSX.Element>();
      const [channelDisplay, setChannelDisplay] = useState<string>("");
      const handleChannelChange = (e: any) => {
        setChannelDisplay(e.target.value);

        const { name, value } = e.target;
        setNewCampaign((prevState) => ({
          ...prevState,
          [name]:value
        }));

        if(e.target.value == "Off-Site"){
          setchannelSelectionOption(<SocialMedia change={componentHandler}/>);
        }
        else if(e.target.value == "On-Site"){
          setchannelSelectionOption(<OnsiteOptions change={componentHandler}/>);
        }
        else if(e.target.value == "In-Store"){
          setchannelSelectionOption(<InStoreOptions change={componentHandler}/>);
        }
      }


      const getBannerId = (banner: String) => {
        if(banner == "Fresh Direct") {
          return 1;
        } else if (banner == "Food Lion") {
          return 2;
        } else if (banner == "Stop and Shop") {
          return 3;
        } else if (banner == "The Giant Company") {
          return 4;
        } else if (banner == "Giant") {
          return 5;
        } else if (banner == "Hannaford") {
          return 6;
        } else {return 0;};
      }

    const activeHandler = (tmpEnd: Date) => {
      var today = new Date();

      return (!(today>tmpEnd));
    }

    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();

        newCampaign.isActive = activeHandler(newCampaign.endDate);

        console.log(newCampaign.endDate);
        console.log(newCampaign.isActive);

        axios.post('https://ps-springboot.azurewebsites.net/campaign', newCampaign)
            .then(res => {
                console.log(res);
                console.log(res.data);
            })

        navigate("/dashboard", {state: {bannerId: initBannerId}});
    }

    return (
        <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
            <CssTextField sx={{backgroundColor:'#D5F6DC'}} style ={{width: '90%'}} type="text" name="campaignName" placeholder="Campaign Name" value={newCampaign.campaignName} onChange={handleInputChange}/><br />
            <CssTextField sx={{backgroundColor:'#D5F6DC'}} style ={{width: '90%'}} type="text" name="company" placeholder="Client Name" value={newCampaign.company} onChange={handleInputChange}/><br />
            <FormControl variant="filled" sx={{backgroundColor:'#D5F6DC'}} style ={{width: '90%'}}>
              <InputLabel id="banner_id">Banner</InputLabel>
              <Select style ={{width: '100%'}} id="banner_selection" value={bannerDisplay} name="banner" onChange={handleBannerChange}>
                <MenuItem value="Fresh Direct">Fresh Direct</MenuItem>
                <MenuItem value="Food Lion">Food Lion</MenuItem>
                <MenuItem value="Stop and Shop">Stop and Shop</MenuItem>
                <MenuItem value="The Giant Company">The Giant Company</MenuItem>
                <MenuItem value="Giant">Giant</MenuItem>
                <MenuItem value="Hannaford">Hannaford</MenuItem>
              </Select>
            </FormControl> <br />
            <CssTextField sx={{backgroundColor:'#D5F6DC'}} style ={{width: '90%'}} type="text" placeholder="budget" name="budget" value={newCampaign.budget} onChange={handleInputChange}/><br />
            <InputLabel>Campaign Dates</InputLabel>
            <Input style={{width: '72%'}} type="date" name="startDate" value={newCampaign.startDate} onChange={handleInputChange}></Input>
            <p><small>to</small></p>
            <Input style={{width: '72%'}} type="date" name="endDate" value={newCampaign.endDate} onChange={handleInputChange}></Input><br />
            <FormControl sx={{backgroundColor:'#D5F6DC'}} style ={{width: '90%'}} variant="filled">
              <InputLabel sx={{}}id="channel_id">Channel</InputLabel>
              <Select style ={{width: '100%'}} id="channel_selection" value={channelDisplay} name="channel" onChange={handleChannelChange}>
                <MenuItem value="On-Site">On-Site</MenuItem>
                <MenuItem value="Off-Site">Off-Site</MenuItem>
                <MenuItem value="In-Store">In-Store</MenuItem>
              </Select>
            </FormControl>
            {channelSelectionOption}
            <CssTextField sx={{backgroundColor:'#D5F6DC'}} style ={{width: '90%'}} type="text" placeholder="Copy" name="copy" value={newCampaign.copy} onChange={handleInputChange}/>
            <ColorButton variant="contained" type="submit" onClick={handleSubmit}>Submit</ColorButton>
        </Box>
    )
}

export default CreateCampaignComp;

