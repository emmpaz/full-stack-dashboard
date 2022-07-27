import React, { useEffect, useState } from 'react';
import foodLionLogo from '../assets/images/foodLion.jpg';
import freshDirectLogo from '../assets/images/freshDirect.jpg';
import hannafordLogo from '../assets/images/hannaford.png';
//import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import { Box, Container, SxProps, Theme, Typography } from '@mui/material';
import { useNavigate, BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { link } from 'fs';
import { Campaign } from '../helper files/types';
import { getCampaigns } from '../helper files/getCampaigns';
//import deepOrange from '@mui/material/colors/deepOrange'
//import deepPurple from '@mui/material/colors/deepPurple'

export const Homepage = () => {
  const [myCampaigns, setCampaigns] = useState<Campaign[]>([]);

  return (
        <CenterContentDiv>
          <SlayAvatar
            alt="foodLionLogo"
            src={foodLionLogo}
            sx={{}}
            text="Food Lion"
          />
          <SlayAvatar
            alt="freshDirect"
            src={freshDirectLogo}
            sx={{}}
            text="Fresh Direct"
          />
          <SlayAvatar
            alt="hannaford"
            src={hannafordLogo}
            sx={{}}
            text="Hannaford"
          />
        </CenterContentDiv>
         );
}

type AvatarStyles = {
  alt?: string | undefined
  src: string
  sx?: SxProps<Theme> | undefined
  text: string
  //TODO impliment link to new page
  link?: string
}

export const SlayAvatar = (props: AvatarStyles) => {
  const { link, alt, src, sx, text } = props
  const navigate = useNavigate();

  //const [myCampaigns, setCampaigns] = useState<Campaign[]>([]);

  const getBannerId = (banner: string) => {
    if(banner == "Fresh Direct") {
      return 1;
    } else if (banner == "Food Lion") {
      return 2;
    } else if (banner == "Stop and Shop") {
      return 3;
    } else if (banner == "The Giant Company") {
      return 4;
    } else if (banner == "Giant") {
      return 5;
    } else if (banner == "Hannaford") {
      return 6;
    } else {return 0;};
  }


  const handleClick = () => {  
    navigate('/dashboard', { state: { id: 1 } })
    //navigate(link ?? '/dashboard')
  };

  return(
      <Box sx={{
          display: 'flex', 
          alignItems: 'center',
          flexDirection: 'column', 
          m: 1,
          p: 1,
          "&:hover":
            {
              boxShadow: 'inset 20px 0 50px rgba(0,0,0, .5)',
              borderRadius: 12.5
            },
      }}>
        <Avatar alt={alt} src={src} sx={sx} onClick={() => navigate("/dashboard", { state: { bannerId: getBannerId(props.text) } })}></Avatar>
        <Typography variant="h6" sx={{fontSize: 10}}>{text}</Typography>
      </Box>
  )
}

export const CenterContentDiv = (props: React.PropsWithChildren) => {
  const { children } = props
  return(
    <Box sx={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center', 
      alignItems: 'center',
      minHeight:"100vh",

    }}>
    {children}
    </Box>
  )
}