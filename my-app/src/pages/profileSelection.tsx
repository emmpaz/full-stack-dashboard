import React, { useEffect, useState } from 'react';
import foodLionLogo from '../assets/images/foodLion.jpg';
import freshDirectLogo from '../assets/images/freshDirect.jpg';
import hannafordLogo from '../assets/images/hannaford.png';
//import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import { Box, Container, SxProps, Theme, Typography, Button } from '@mui/material';
import { useNavigate, BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { link } from 'fs';
import { Campaign } from '../helper files/types';
import { getCampaigns } from '../helper files/getCampaigns';
import { TitleContainer } from '../components/containers';
//import deepOrange from '@mui/material/colors/deepOrange'
//import deepPurple from '@mui/material/colors/deepPurple'
import '../css files/profile-selection.css';
import { fontFamily } from '@mui/system';
export const Homepage = () => {
  const [myCampaigns, setCampaigns] = useState<Campaign[]>([]);

  return (

    <div className="profile-background">
      <div className="logout">
        <Box sx={{
          margin: '30px 60px 0 0'
        }}>
          <Button sx={{ 
            color: '#00C832 !important',
            margin: 'top 50px',
            fontFamily: "PoppinsMedium",
            }} value="7">Logout</Button>
        </Box>
      </div>
        <CenterContentDiv>
          <div>
            <SlayAvatar
              alt="freshDirect"
              src={freshDirectLogo}
              sx={{
                height:150,
                width:150
              }}
              text="Fresh Direct"
            />
          </div>
          <div>
            <SlayAvatar
              alt="foodLionLogo"
              src={foodLionLogo}
              sx={{
                height:150,
                width:150
              }}
              text="Food Lion"
            />
          </div>
          <div>
            <SlayAvatar
              alt="stopAndShop"
              src={hannafordLogo}
              sx={{
                height:150,
                width:150
              }}
              text="Stop and Shop"
            />
          </div>
          <div>
            <SlayAvatar
              alt="The Giant Company"
              src={hannafordLogo}
              sx={{
                height:150,
                width:150
              }}
              text="The Giant Company"
            />
          </div>
          <div>
            <SlayAvatar
              alt="Giant"
              src={hannafordLogo}
              sx={{
                height:150,
                width:150
              }}
              text="Giant"
            />
          </div>
          <div>
            <SlayAvatar
              alt="hannaford"
              src={hannafordLogo}
              sx={{
                height:150,
                width:150
              }}
              text="Hannaford"
            />
          </div>
        </CenterContentDiv>
        </div>
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
      return "1";
    } else if (banner == "Food Lion") {
      return "2";
    } else if (banner == "Stop and Shop") {
      return "3";
    } else if (banner == "The Giant Company") {
      return "4";
    } else if (banner == "Giant") {
      return "5";
    } else if (banner == "Hannaford") {
      return "6";
    } else {return "0";};
  }


  const handleClick = () => {
    navigate('/dashboard', { state: { id: 7 } })
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
        <Typography variant="h1" sx={{
          fontSize: 20,
          fontFamily: "PoppinsMedium",
          color: "white",
          margin: '10px'}}>{text}</Typography>
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