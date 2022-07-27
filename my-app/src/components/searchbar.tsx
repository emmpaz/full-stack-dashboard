import React, {useState} from 'react';
import {Campaign} from '../helper files/types.js';
import Scroll from './scroll';

const Search = (props : {list : Campaign[]}) => {

    const [searchField, setSearchField] = useState("");
    
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
    }

    const searchList = () => {
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
    return(
        <section>
            <div>
                <input
                    type="search"
                    placeholder="search campaign"
                    onChange = {handleChange}
                />
            </div>
            {searchList()}
        </section>
    )
}

export default Search;