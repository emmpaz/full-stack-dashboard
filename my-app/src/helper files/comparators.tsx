import { Campaign } from "./types"

export const compare_by_name = (x: Campaign, y: Campaign) => {
    return x.campaignName.localeCompare(y.campaignName.toString())
}

export const compare_by_name_reversed = (x: Campaign, y: Campaign) => {
    return y.campaignName.localeCompare(x.campaignName.toString())
}

export const compare_by_date = (x: Campaign, y: Campaign) => {
    if(x.endDate <= y.endDate)
        return 1
    else
        return -1
}

export const compare_by_date_reversed = (x: Campaign, y: Campaign) => {
    if(x.endDate > y.endDate)
        return 1
    else
        return -1
}

export const compare_by_budget = (x: Campaign, y: Campaign) => {
    return x.budget - y.budget
}