import { Box, ButtonBase, Grid, List, ListItemButton, ListItemText, Paper, Typography } from "@mui/material";
import React from "react";


export const CampListItem = (props: {
    year: string; 
    title: string; 
    end: string; 
    budget: string; 
}) => {
    return (
        <ButtonBase>
            <Paper
            elevation={2}
            sx={{
                p: 2.5,
                margin: 'auto'
            }}
            >
                <Grid container spacing={6}>
                    <Grid item direction="column">
                        <Typography  align="left" variant="h6" >
                            {props.title}
                        </Typography>
                        <Typography align="left" variant="subtitle1" >
                            {props.year}
                        </Typography>  
                    </Grid>
                <Grid item direction="column">
                        <Typography align="left" variant="subtitle1" >
                            {props.end}
                        </Typography>
                </Grid>
                <Grid item direction="column">
                        <Typography align="left" variant="subtitle1" >
                            {props.budget}
                        </Typography>
                </Grid>  
            </Grid>
            </Paper>
        </ButtonBase>
    );
}

