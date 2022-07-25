import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import React, { useState } from 'react';


export const SocialMedia = () => {
    const [socialMedia, setSocialMedia] = useState<String>("");

    const handleInputChange = (e: any) => {
    }

    return(
        <FormControl style ={{width: '100%'}} variant="standard">
              <InputLabel id="banner_id">Social Media</InputLabel>
              <Select style ={{width: '100%'}} labelId="social_media_id" name="social_media" value={socialMedia} onChange={handleInputChange}>
                <MenuItem value="Facebook">Facebook</MenuItem>
                <MenuItem value="Instagram">Instagram</MenuItem>
                <MenuItem value="Twitter">Twitter</MenuItem>
                <MenuItem value="YouTube">YouTube</MenuItem>
              </Select>
            </FormControl>
    )
}