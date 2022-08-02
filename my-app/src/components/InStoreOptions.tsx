import { Input, Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import React, { useState } from 'react';
import { Campaign } from '../helper files/types';


export const InStoreOptions = (props:{ change : (name:any, value:any) => void}) => {

    const [inStoreOptions, setInStoreOptions] = useState<String>("");
    
    const handleInStoreChange = (e: any) => {
        const {name , value} = e.target;
        props.change(name, value);
        //props.currentCamp.instoreOptions = e.target.value;
        setInStoreOptions(value);
    }

    const [region, setRegion] = useState<String>("");
    const handleRegionChange = (e : any) => {
      const {name , value} = e.target;
      props.change(name, value);
      //props.currentCamp.targetRegion = e.target.value;
      setRegion(value);
    }

    return(
        <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off">

        <form style ={{width: '100%'}}>
              <InputLabel id="instore_id">In-Store Options</InputLabel>
              <select style ={{width: '100%'}} id="in_store_options_id" name="instoreOptions" onChange={handleInStoreChange}>
                <option value="none"></option>  
                <option value="In-Store TV">In-Store TV</option>
                <option value="POS Screen<">POS Screen</option>
              </select>
            </form>

            <form style ={{width: '100%'}}>
              <InputLabel id="region_id">Store Location</InputLabel>
              <select style ={{width: '100%'}} id="region_id" name="storeLocation" onChange={handleRegionChange}>
                <option value="none"></option>
                <option value="DE">DE</option>
                <option value="VA">VA</option>
                <option value="GA">GA</option>
                <option value="KY">KY</option>
                <option value="MD">MD</option>
                <option value="NC">NC</option>
                <option value="PA">PA</option>
                <option value="SC">SC</option>
                <option value="TN">TN</option>
                <option value="WV">WV</option>
                <option value="CT">CT</option>
                <option value="NJ">NJ</option>
                <option value="DC">DC</option>
                <option value="ME">ME</option>
                <option value="NH">NH</option>
                <option value="VT">VT</option>
                <option value="MA">MA</option>
                <option value="RI">RI</option>
              </select>
            </form>
            
        </Box>
    )
}