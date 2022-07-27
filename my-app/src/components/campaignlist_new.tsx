import React from 'react';
import { CampListItem } from './func_camp_list';
import { Campaign } from '../helper files/types';
import { useNavigate } from 'react-router-dom';

const SearchList = (props: {list : Campaign[]}) => {
    const navigate = useNavigate();
    const array = [...props.list]
    
    return(
        array.map((campaign : Campaign) => {
            <CampListItem 
                year="2022"
                title={campaign.campaignName.toString()}
                budget={campaign.budget.toString()}
                end={campaign.endDate.toString()}/>
        })
    );
}
export default SearchList;