import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import React, { useState } from 'react';


export const OnsiteOptions = () => {
    const [onsiteOptions, setOnsiteOptions] = useState<String>("");

    const handleInputChange = (e: any) => {

    }

    return(
        <FormControl style ={{width: '100%'}} variant="standard">
              <InputLabel id="banner_id">Onsite Options</InputLabel>
              <Select style ={{width: '100%'}} labelId="social_media_id" name="social_media" value={onsiteOptions} onChange={handleInputChange}>
                <MenuItem value="Facebook">Sponsored Product</MenuItem>
                <MenuItem value="Instagram">On-site creative</MenuItem>
              </Select>
            </FormControl>
    )
}