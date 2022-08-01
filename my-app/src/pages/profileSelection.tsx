import React, { useEffect, useState } from 'react';
import foodLionLogo from '../assets/images/foodLion.jpg';
import freshDirectLogo from '../assets/images/freshDirect.jpg';
import hannafordLogo from '../assets/images/hannaford.png';
import giantCompanyLogo from '../assets/images/giant-company.png';
import giantLogo from '../assets/images/giant.png';
import stopShopLogo from '../assets/images/stop&shop.png';
//import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import { Button, Box, Container, SxProps, Theme, Typography } from '@mui/material';
import { useNavigate, BrowserRouter as Router, Route, Link } from 'react-router-dom';

import { Campaign } from '../helper files/types';
import { getCampaigns } from '../helper files/getCampaigns';
import Header from '../components/header';
import { TitleContainer } from '../components/containers';
//import deepOrange from '@mui/material/colors/deepOrange'
//import deepPurple from '@mui/material/colors/deepPurple'
import '../css files/profile-selection.css';

export const Homepage = () => {
  const [myCampaigns, setCampaigns] = useState<Campaign[]>([]);

  return (
    <div className="profile-background">
      <div className="logout">
        <Box sx={{
          margin: '30px 60px 0 0',
        }}>
          <Button sx={{ 
            color: 'white !important',
            margin: 'top 50px',
            fontFamily: "PoppinsLight",
            fontSize: '25px'
            }} value="7">Logout</Button>
        </Box>
      </div>
        <CenterContentDiv>
          <div>
            <SlayAvatar
              alt="freshDirect"
              src={freshDirectLogo}
              sx={{
                height:'75%',
                width:'75%',
                marginBottom: '25px',
                transition: "all .2s ease-in-out",
                "&:hover":{
                  transform: 'scale(1.2)'
                }
              }}
              text="Fresh Direct"
            />
          </div>
          <div>
            <SlayAvatar
              alt="foodLionLogo"
              src={foodLionLogo}
              sx={{
                height:'75%',
                width:'75%',
                marginBottom: '25px',
                transition: "all .2s ease-in-out",
                "&:hover":{
                  transform: 'scale(1.2)'
                }
              }}
              text="Food Lion"
            />
          </div>
          <div>
            <SlayAvatar
              alt="stopAndShop"
              src={stopShopLogo}
              sx={{
                height:'75%',
                width:'75%',
                marginBottom: '25px',
                transition: "all .2s ease-in-out",
                "&:hover":{
                  transform: 'scale(1.2)'
                }
              }}
              text="Stop and Shop"
            />
          </div>
          <div>
            <SlayAvatar
              alt="The Giant Company"
              src={giantCompanyLogo}
              sx={{
                height:'75%',
                width:'75%',
                marginBottom: '25px',
                transition: "all .2s ease-in-out",
                "&:hover":{
                  transform: 'scale(1.2)'
                }
              }}
              text="The Giant Company"
            />
          </div>
          <div>
            <SlayAvatar
              alt="Giant"
              src={giantLogo}
              sx={{
                height:'75%',
                width:'75%',
                marginBottom: '25px',
                transition: "all .2s ease-in-out",
                "&:hover":{
                  transform: 'scale(1.2)'
                }
              }}
              text="Giant"
            />
          </div>
          <div>
            <SlayAvatar
              alt="hannaford"
              src={hannafordLogo}
              sx={{
                height:'75%',
                width:'75%',
                marginBottom: '25px',
                transition: "all .2s ease-in-out",
                "&:hover":{
                  transform: 'scale(1.2)'
                }
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
          width: '70%',
          "&:hover":
            {
            
            },
      }}>

        <Avatar alt={alt} src={src} sx={sx} onClick={() => navigate("/dashboard", { state: { bannerId: getBannerId(props.text) } })}></Avatar>
        <Typography variant="h1" sx={{
          fontSize: 20,
          fontFamily: "PoppinsLight",
          color: "white",
          margin: 'auto',
          }}>{text}</Typography>
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