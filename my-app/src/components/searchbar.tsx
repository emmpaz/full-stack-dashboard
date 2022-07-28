import React, {useState} from 'react';
import {Campaign} from '../helper files/types.js';
import { CampListItem } from './func_camp_list';
import Scroll from './scroll';
import { TextField } from "@mui/material";
import { styled } from '@mui/material/styles';
import { SearchListItem } from './searchListItem';

const CssTextField = styled(TextField)({
    '& label':{
        color:'darkgray'
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
        setSearchField(e.target.value);
        if(e.target.value == "")
            setDisplySearch(false)
        else
            setDisplySearch(true)
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
        <section>
            <div>
                <div style={{width:'100%', height: '100%'}}>
                <CssTextField id="filled-basic" label="search" variant="standard" onChange = {handleChange}/>
                </div>
            </div>
            {searchList()}
        </section>
    )
}

export default Search;