import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import axios from 'axios';
import { Campaign } from '../helper files/types'

export function BannerSelect() {
  const [banners, setBanners] = React.useState('');
  const [originalList, setList] = React.useState<Campaign[]>([]);
  
  const handleChange = (event: SelectChangeEvent) => {
    setBanners(event.target.value);
    fetchCampaigns(1);
  }; 

  const fetchCampaigns = (bannerId: number) => {
    axios.get('http://localhost:8080/banner/1').then((res) => {
    console.log(res);
    setList(res.data);
    setBanners(res.data);
    })
    .catch((err) => {
    console.log(err);
    });
};

  return (
    <Box sx={{ float: 'right', minWidth: 120 }}>
      <FormControl style ={{width: '100%'}} variant="standard">
              <InputLabel id="banner_id">Banner</InputLabel>
              <Select style ={{width: '100%'}} labelId="banner_id" name="banner" onChange={handleChange}>
                <MenuItem value="Fresh Direct">Fresh Direct</MenuItem>
                <MenuItem value="Food Lion">Food Lion</MenuItem>
                <MenuItem value="Stop and Shop">Stop and Shop</MenuItem>
                <MenuItem value="The Giant Company">The Giant Company</MenuItem>
                <MenuItem value="Giant">Giant</MenuItem>
                <MenuItem value="Hannaford">Hannaford</MenuItem>
              </Select>
            </FormControl>
    </Box>
  );
}
