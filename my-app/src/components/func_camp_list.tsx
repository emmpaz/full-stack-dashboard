import { Box, ButtonBase, Grid, List, ListItemButton, ListItemText, Paper, Typography } from "@mui/material";
import React from "react";
import { useNavigate, Link, useLocation } from 'react-router-dom';


export const CampListItem = (props: {
    year: string; 
    title: string; 
    end: string; 
    budget: string; 

}) => 
    {
    const navigate = useNavigate();
    return (
        <ButtonBase >
            <Paper
            elevation={2}
            sx={{
                width: '100%',
                p: 3.5,
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

