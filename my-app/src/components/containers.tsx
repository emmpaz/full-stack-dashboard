import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export const BigContainer = (props: React.PropsWithChildren) => {
  const { children } = props
  return (
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="xl">
          <Box sx={{ bgcolor: 'pink'}}>
            {children}
          </ Box>
        </Container>
      </React.Fragment>
    );
  }

export const TitleContainer = (props: React.PropsWithChildren) => {
  const { children } = props
  return (
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="xl">
          <Box sx={{ bgcolor: 'pink', height: '10vh' }}>
            {children}
          </ Box>
        </Container>
      </React.Fragment>
    );
  }
export const MidContainer = (props: React.PropsWithChildren) => {
  const { children } = props
  return (
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="xl">
          <Box sx={{ bgcolor: 'pink', display: 'flex', flexDirection: 'row'}}>
            {children}
          </ Box>
        </Container>
      </React.Fragment>
    );
  }

export const CampaignContainer = (props: React.PropsWithChildren) => {
  const { children } = props
  return (
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="xl">
          <Box sx={{ bgcolor: 'pink', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            {children}
          </ Box>
        </Container>
      </React.Fragment>
    );
  }

export const OtherContainer = (props: React.PropsWithChildren) => {
  const { children } = props
  return (
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="xl">
          <Box sx={{ bgcolor: 'pink', display: 'flex', flexDirection: 'column'}}>
            {children}
          </ Box>
        </Container>
      </React.Fragment>
    );
  }

export const RevContainer = (props: React.PropsWithChildren) => {
  const { children } = props
  return (
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="xl">
          <Box sx={{ bgcolor: 'pink'}}>
            {children}
          </ Box>
        </Container>
      </React.Fragment>
    );
  }

export const GraphContainer = (props: React.PropsWithChildren) => {
  const { children } = props
  return (
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="xl">
          <Box sx={{ bgcolor: 'pink'}}>
            {children}
          </ Box>
        </Container>
      </React.Fragment>
    );
  }