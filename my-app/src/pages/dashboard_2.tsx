import { Grid, Paper, Stack } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { CampListItem } from '../components/func_camp_list'
//import Graph from '../components/graph'
export const DashTwo = () => {
  const navigate = useNavigate();
  return (
    <>
    <Paper>
      <Grid container spacing={0}>
        <Grid item direction="column">
          <Box padding={1}>
            <Stack spacing={2}>
              <CampListItem
                year="2012"
                title="Sample Title"
                end="12/12/2001"
                budget="test"
              />
              <CampListItem
                year="2012"
                title="Sample Title"
                end="12/12/2012"
                budget="test"
              />
              <CampListItem
                year="2012"
                title="Sample Title"
                end="12/12/2022"
                budget="test"
              />
            </Stack>
          </Box>
        </Grid>
        <Grid item direction="column">
          <br/>
          <Paper>$19,242,293</Paper>
          <br/>
          <Paper>
          <Box padding={1}>
                
          </Box>
          </Paper>
        </Grid>
      </Grid>
      </Paper>
    </>
  )
}
