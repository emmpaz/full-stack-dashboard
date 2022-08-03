import { ButtonBase, Grid, Paper, Typography } from "@mui/material";
import React from "react";


export const SearchListItem = (props: {
    campaignName: String
}) => {

    return(
        <ButtonBase>
            <Paper
            elevation={2}
            sx={{
                width: '95%',
                p: '7px',
                margin: '3.5px',
                opacity: '90%'
            }}
            >
                <Grid>
                    <Typography variant="h6">{props.campaignName}</Typography>
                </Grid>
            </Paper>
        </ButtonBase>
    )
}