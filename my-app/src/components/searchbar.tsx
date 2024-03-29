import React, {useRef, useState} from 'react';
import {Campaign} from '../helper files/types.js';
import { CampListItem } from './func_camp_list';
import Scroll from './scroll';
import { Box, Icon, IconButton, InputAdornment, TextField } from "@mui/material";
import { styled } from '@mui/material/styles';
import { SearchListItem } from './searchListItem';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
const CssTextField = styled(TextField)({
    '& label':{
        color:'black',
    },
    '& .MuiInput-underline':{
        borderBottomColor:'white'
    },
    '& label.Mui-focused': {
      color: 'white',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'white',
    },
  });

const Search = (props : {list : Campaign[]}) => {

    const [searchField, setSearchField] = useState("");
    const [displaySearch, setDisplySearch] = useState<Boolean>(false);
    
    const [searchClear, setsearchClear] = useState("");

    const array = [...props.list]
    const filteredCampaigns = array.filter(
        (campaign : Campaign) => {
            return (
                campaign
                .campaignName
                .toLowerCase()
                .includes(searchField.toLowerCase())
                );
        }
    );

    const handleChange = (e: any) => {
        setsearchClear(e.target.value);
        setSearchField(e.target.value);
        if(e.target.value == "")
            setDisplySearch(false)
        else
            setDisplySearch(true)
    }

    const clearHandle = () => {
        setsearchClear("");
        setDisplySearch(false)
    }

    const searchList = () => {
        if(displaySearch){
            return(
            <Scroll>
                <div style={{display:'grid'}}>
                    {filteredCampaigns.map((campaign) => {
                        return(
                        <SearchListItem campaignName={campaign.campaignName}/>
                        )
                    })}
                </div>
            </Scroll>     
            )
        }
    }
    return(
        <section style={{zIndex:'1', position:'relative'}}>
            <div>
                <div style={{width:'100%', height: '100%'}}>



                <TextField
                    fullWidth
                    size='small'
                    value={searchClear}
                    onChange = {handleChange}
                    label="Search"
                    InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                        <SearchIcon />
                        </InputAdornment>
                    ),
                    }}
                    variant="outlined"
                />
                </div>
            </div>
            {searchList()}
        </section>
    )
}

export default Search;