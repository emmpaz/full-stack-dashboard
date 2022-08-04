import React, { useEffect, useState } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import { Campaign } from '../helper files/types';
import { CreateCampaignComp } from '../components/createCampaignComp';
import { Box, FormControl, Input, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { ColorButton, CssTextField } from '../css files/customTextField';

const UpdateCampaign = () => {
    const navigate = useNavigate();
    const { state } = useLocation();
    const campaign = state as any;
    const currentCampaign = campaign;

    const campBudget = (currentCampaign.budget as string);

    console.log(currentCampaign);

    const handleInputChange = (e: any) => {
        const { name, value } = e.target;
        
        setNewCampaign((prevState) => ({
          ...prevState,
          [name]:value
        }));
  
      };

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

      const activeHandler = (tmpEnd: Date) => {
        var today = new Date();
        return (today>tmpEnd);
      }

      const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();

        newCampaign.isActive = activeHandler(newCampaign.endDate);

        axios.put('https://ps-springboot.azurewebsites.net/campaign', newCampaign)
            .then(res => {
                console.log(res);
                console.log(res.data);
            })

        navigate("/detailView", { state: { currentCamp: newCampaign }} );
    }

    

    const [newCampaign, setNewCampaign] = useState(currentCampaign.currentCampaign as Campaign);

    return(
            <div>
                <h1>Update Campaign</h1>
                <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
            <CssTextField sx={{backgroundColor:'#D5F6DC'}} style ={{width: '90%'}} label="Campaign Name" type="text" name="campaignName" placeholder={newCampaign.campaignName} value={newCampaign.campaignName} onChange={handleInputChange}/><br />
            <CssTextField sx={{backgroundColor:'#D5F6DC'}} style ={{width: '90%'}} label="Company" type="text" name="company" placeholder={newCampaign.company} value={newCampaign.company} onChange={handleInputChange}/><br />
            
            <FormControl variant="filled" sx={{backgroundColor:'#D5F6DC'}} style ={{width: '90%'}} >
              <InputLabel id="banner_id">Banner</InputLabel>
              <Select style ={{width: '100%'}} id="banner_selection" placeholder={newCampaign.banner} value={newCampaign.banner} onChange={handleBannerChange} name="banner">
                <MenuItem value="Fresh Direct">Fresh Direct</MenuItem>
                <MenuItem value="Food Lion">Food Lion</MenuItem>
                <MenuItem value="Stop and Shop">Stop and Shop</MenuItem>
                <MenuItem value="The Giant Company">The Giant Company</MenuItem>
                <MenuItem value="Giant">Giant</MenuItem>
                <MenuItem value="Hannaford">Hannaford</MenuItem>
              </Select>
            </FormControl> <br />

            <CssTextField sx={{backgroundColor:'#D5F6DC'}} style ={{width: '90%'}} label="Budget" type="number" placeholder={campBudget} onChange={handleInputChange} name="budget" value={newCampaign.budget}/><br />
            <InputLabel>Campaign Dates</InputLabel>
            <Input style={{width: '72%'}} type="date" name="startDate" value={newCampaign.startDate} onChange={handleInputChange}></Input>
            <p><small>to</small></p>
            <Input style={{width: '72%'}}type="date" name="endDate" value={newCampaign.endDate} onChange={handleInputChange}></Input><br />
            <CssTextField sx={{backgroundColor:'#D5F6DC'}} style ={{width: '90%'}} label="Description" type="text" placeholder={newCampaign.copy} name="copy" value={newCampaign.copy} onChange={handleInputChange}/>
            
            <ColorButton variant="contained" type="submit" onClick={handleSubmit}>Submit</ColorButton>

        </Box>
            </div>
    )

};
export default UpdateCampaign;