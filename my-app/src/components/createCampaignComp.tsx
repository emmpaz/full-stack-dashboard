import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Button, Input, Select, MenuItem, InputLabel, FormControl } from '@mui/material';
import { Campaign } from '../helper files/types';
import { OnsiteOptions } from './OnsiteOptions';
import { InStoreOptions } from './InStoreOptions';
import { SocialMedia } from './socialMedia';

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
}

export const CreateCampaignComp = () => {
    const [newCampaign, setNewCampaign] = useState<Campaign>(defaultCampaign)

    const componentHandler = (name :any, value : any) => {
      var campaignTemp = JSON.parse(JSON.stringify(newCampaign));
      campaignTemp = {...campaignTemp, [name]:value};
      setNewCampaign(campaignTemp);
    }
  
    //handles all inputs (campiagn name, client, budget, start/end date)
    const handleInputChange = (e: any) => {
        const { name, value } = e.target;
        var campaignTemp = JSON.parse(JSON.stringify(newCampaign));
        campaignTemp = {...campaignTemp, [name]:value};
        setNewCampaign(campaignTemp);
        if(e.target.value == "Off-Site"){
          setchannelSelectionOption(<SocialMedia change={componentHandler}/>);
        }
        else if(e.target.value == "On-Site"){
          setchannelSelectionOption(<OnsiteOptions change={componentHandler}/>);
        }
        else if(e.target.value == "In-Store"){
          setchannelSelectionOption(<InStoreOptions change={componentHandler}/>);
        }
      };

      const [bannerDisplay, setBannerDisplay] = useState<string>("");
      const handleBannerChange = (e: any) => {
        const { name, value } = e.target;
        setBannerDisplay(e.target.value);
        var campaignTemp = JSON.parse(JSON.stringify(newCampaign));
        campaignTemp = {...campaignTemp, [name]:value};
        setNewCampaign(campaignTemp);
      }

      const [channelSelectionOption, setchannelSelectionOption] = useState<JSX.Element>();
      const [channelDisplay, setChannelDisplay] = useState<string>("");
      const handleChannelChange = (e: any) => {
        setChannelDisplay(e.target.value);
        const { name, value } = e.target;
        var campaignTemp = JSON.parse(JSON.stringify(newCampaign));
        campaignTemp = {...campaignTemp, [name]:value};
        setNewCampaign(campaignTemp);
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

    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        var campaignTemp = JSON.parse(JSON.stringify(newCampaign));
        campaignTemp = {...campaignTemp, ['bannerId']:getBannerId(campaignTemp.banner)};
        setNewCampaign(campaignTemp);
        axios.post('https://ps-springboot.azurewebsites.net/campaign', newCampaign)
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
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
            <Input style ={{width: '100%'}} type="text" name="campaignName" placeholder="Campaign Name" value={newCampaign.campaignName} onChange={handleInputChange}></Input><br />
            <Input style ={{width: '100%'}} type="text" name="company" placeholder="Client Name" value={newCampaign.company} onChange={handleInputChange}></Input><br />
            <form style ={{width: '100%'}}>
              <InputLabel id="banner_id">Banner</InputLabel>
              <select style ={{width: '100%'}} id="banner_selection" value={bannerDisplay} name="banner" onChange={handleBannerChange}>
                <option value="none"></option>
                <option value="Fresh Direct">Fresh Direct</option>
                <option value="Food Lion">Food Lion</option>
                <option value="Stop and Shop">Stop and Shop</option>
                <option value="The Giant Company">The Giant Company</option>
                <option value="Giant">Giant</option>
                <option value="Hannaford">Hannaford</option>
              </select>
            </form> <br />
            <Input style ={{width: '100%'}} type="number" placeholder="budget" name="budget" value={newCampaign.budget} onChange={handleInputChange}></Input><br />
            <InputLabel>Campaign Dates</InputLabel>
            <Input style={{width: '72%'}} type="date" name="startDate" value={newCampaign.startDate} onChange={handleInputChange}></Input>
            <p><small>to</small></p>
            <Input style={{width: '72%'}} type="date" name="endDate" value={newCampaign.endDate} onChange={handleInputChange}></Input><br />
            <form style ={{width: '100%'}}>
              <InputLabel id="channel_id">Channel</InputLabel>
              <select style ={{width: '100%'}} id="channel_selection" value={channelDisplay} name="channel" onChange={handleChannelChange}>
                <option value="none"></option>
                <option value="On-Site">On-Site</option>
                <option value="Off-Site">Off-Site</option>
                <option value="In-Store">In-Store</option>
              </select>
            </form>
            {channelSelectionOption}
            <Button type="submit" onClick={handleSubmit}>Submit</Button>
        </Box>
    )
}

export default CreateCampaignComp;

