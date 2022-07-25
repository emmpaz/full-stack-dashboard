import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import React, { useState } from 'react';


export const InStoreOptions = () => {
    const [inStoreOptions, setinStoreOptions] = useState<String>("");

    const handleInputChange = (e: any) => {

    }

    return(
        <FormControl style ={{width: '100%'}} variant="standard">
              <InputLabel id="banner_id">In-Store Options</InputLabel>
              <Select style ={{width: '100%'}} labelId="in_store_options_id" name="in_store_options" value={inStoreOptions} onChange={handleInputChange}>
                <MenuItem value="Facebook">In-Store TV</MenuItem>
                <MenuItem value="Instagram">POS Screen</MenuItem>
              </Select>
            </FormControl>
    )
}