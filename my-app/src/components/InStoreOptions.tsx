import { Input, Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import React, { useState } from 'react';


export const InStoreOptions = () => {

    const [inStoreOptions, setInStoreOptions] = useState<String>("");
    const handleInStoreChange = (e: any) => {
        setInStoreOptions(e.target.value);
    }

    const [region, setRegion] = useState<String>("");
    const handleRegionChange = (event : any) => {
        setRegion(event.target.value)
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
              <InputLabel id="banner_id">In-Store Options</InputLabel>
              <Select style ={{width: '100%'}} labelId="in_store_options_id" name="in_store_options" value={inStoreOptions} onChange={handleInStoreChange}>
                <MenuItem value="In-Store TV">In-Store TV</MenuItem>
                <MenuItem value="POS Screen<">POS Screen</MenuItem>
              </Select>
            </FormControl>

            <FormControl style ={{width: '100%'}} variant="standard">
              <InputLabel id="banner_id">Store Location</InputLabel>
              <Select style ={{width: '100%'}} labelId="banner_id" name="banner" value={region} onChange={handleRegionChange}>
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
            
        </Box>
    )
}