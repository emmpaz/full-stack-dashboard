import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import React, { useState } from 'react';
import { Campaign } from '../helper files/types';


export const OnsiteOptions = (props:{currentCamp: Campaign, change : (name:any, value:any) => void}) => {
    const [onsiteOptions, setOnsiteOptions] = useState<String>("");

    const handleOnsiteChange = (e: any) => {
        const {name , value} = e.target;
        props.change(name, value);
        setOnsiteOptions(e.target.value);
    }

    const [websiteOptions, setWebsiteOptions] = useState<String>("");
    const handleWebsiteChange = (e: any) => {
        const {name , value} = e.target;
        props.change(name, value);
        setWebsiteOptions(e.target.value);
    }

    const [ageRange, setAgeRange] = useState<String>("");
    const handleAgeChange = (e : any) => {
        const {name , value} = e.target;
        props.change(name, value);
        setAgeRange(e.target.value)
    }

    const [region, setRegion] = useState<String>("");
    const handleRegionChange = (e : any) => {
        const {name , value} = e.target;
        props.change(name, value);
        setRegion(e.target.value)
    }

    return(
        <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off">
       
        <FormControl style ={{width: '100%'}} variant="standard">
              <InputLabel id="onsite_id">Onsite Options</InputLabel>
              <Select style ={{width: '100%'}} labelId="onsite_id" name="onsiteOptions" value={onsiteOptions} onChange={handleOnsiteChange}>
              <MenuItem value="Sponsored Product">Sponsored Product</MenuItem>
                <MenuItem value="On-Site Creative">On-Site creative</MenuItem>
              </Select>
            </FormControl>

            <FormControl style ={{width: '100%'}} variant="standard">
              <InputLabel id="website_id">Website Location</InputLabel>
              <Select style ={{width: '100%'}} labelId="website_id" name="websiteLocation" value={websiteOptions} onChange={handleWebsiteChange}>
                <MenuItem value="Homepage">Homepage</MenuItem>
                <MenuItem value="Product Page">Product Page</MenuItem>
                <MenuItem value="Shopping Cart">Shopping Cart</MenuItem>
              </Select>
            </FormControl>

            <FormControl style ={{width: '100%'}} variant="standard">
              <InputLabel id="age_id">Target Audience Age Range</InputLabel>
              <Select style ={{width: '100%'}} labelId="age_id" name="targetAge" value={ageRange} onChange={handleAgeChange}>
                <MenuItem value="Under 18">Under 18</MenuItem>
                <MenuItem value="18-24 years old">18-24 years old</MenuItem>
                <MenuItem value="25-34 years old">25-34 years old</MenuItem>
                <MenuItem value="35-44 years old">35-44 years old</MenuItem>
                <MenuItem value="45-54 years old">45-54 years old</MenuItem>
                <MenuItem value="55-64 years old">55-64 years old</MenuItem>
                <MenuItem value="65-74 years old">65-74 years old</MenuItem>
                <MenuItem value="75 years or older">75 years or older</MenuItem>
              </Select>
            </FormControl>

            <FormControl style ={{width: '100%'}} variant="standard">
              <InputLabel id="banner_id">Target Audience Region</InputLabel>
              <Select style ={{width: '100%'}} labelId="region_id" name="region" value={region} onChange={handleRegionChange}>
                <MenuItem value="DE">DE</MenuItem>
                <MenuItem value="VA">VA</MenuItem>
                <MenuItem value="GA">GA</MenuItem>
                <MenuItem value="KY">KY</MenuItem>
                <MenuItem value="MD">MD</MenuItem>
                <MenuItem value="NC">NC</MenuItem>
                <MenuItem value="PA">PA</MenuItem>
                <MenuItem value="SC">SC</MenuItem>
                <MenuItem value="TN">TN</MenuItem>
                <MenuItem value="WV">WV</MenuItem>
                <MenuItem value="CT">CT</MenuItem>
                <MenuItem value="NJ">NJ</MenuItem>
                <MenuItem value="DC">DC</MenuItem>
                <MenuItem value="ME">ME</MenuItem>
                <MenuItem value="NH">NH</MenuItem>
                <MenuItem value="VT">VT</MenuItem>
                <MenuItem value="MA">MA</MenuItem>
                <MenuItem value="RI">RI</MenuItem>
              </Select>
            </FormControl>

            {/* NEED TARGET AUDIENCE GENDER SLIDER */}

        </Box>
    )
}