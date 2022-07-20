import React from 'react';
import foodLionLogo from '../assets/images/foodLion.jpg';
import freshDirectLogo from '../assets/images/freshDirect.jpg';
import hannafordLogo from '../assets/images/hannaford.png';
//import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import { Box, Container, SxProps, Theme, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { link } from 'fs';
//import deepOrange from '@mui/material/colors/deepOrange'
//import deepPurple from '@mui/material/colors/deepPurple'

export const Homepage = () => {
  return (
        <CenterContentDiv>
          <SlayAvatar

            alt="foodLionLogo"
            src={foodLionLogo}
            sx={{}}
            text="Food Lion 2"
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

  const handleClick = () => {
    navigate(link ?? '/dashboard')
  }

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
        <Avatar alt={alt} src={src} sx={sx} onClick={handleClick}></Avatar>
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