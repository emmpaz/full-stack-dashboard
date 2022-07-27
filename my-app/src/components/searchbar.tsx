import React, {useState} from 'react';
import {Campaign} from '../helper files/types.js';
import { CampListItem } from './func_camp_list';
import Scroll from './scroll';
import { TextField } from "@mui/material";
import { styled } from '@mui/material/styles';

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
                    {filteredCampaigns.map((campaign) => {
                        return(
                        <div>
                            <p>{campaign.campaignName}</p>
                            <br></br>
                        </div>  
                        )
                    })}
            </Scroll>     
            )
        }
    }
    return(
        <section>
            <div>
                <CssTextField id="filled-basic" label="search" placeholder="search campaign" variant="standard" onChange = {handleChange}/>
            </div>
            {searchList()}
        </section>
    )
}

export default Search;