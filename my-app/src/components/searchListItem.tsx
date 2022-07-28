import { ButtonBase, Grid, Paper, Typography } from "@mui/material";
import React from "react";


export const SearchListItem = (props: {
    campaignName: String
}) => {

    return(
        <ButtonBase>
            <Paper
            sx={{
                width:'100%',
                margin:'2px'
            }}>
                <Grid>
                    <Typography>{props.campaignName}</Typography>
                </Grid>
            </Paper>
        </ButtonBase>
    )
}