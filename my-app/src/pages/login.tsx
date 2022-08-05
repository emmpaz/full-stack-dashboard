import React from "react";
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { TextField } from "@mui/material";
import {Button, ButtonProps} from "@mui/material";
import { purple } from '@mui/material/colors';
import { duration, styled, ThemeProvider } from '@mui/material/styles';
import '../css files/login.css';
import JoshTheme from "../css files/allStyle";
import logo from '../assets/images/ourLogo.png';
  const CssTextField = styled(TextField)({
    '& label':{
        color:'darkgray'
    },
    '& .MuiInput-underline':{
        borderBottomColor:'black'
    },
    '& label.Mui-focused': {
      color: 'darkgrey',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'black',
    },
  });

const Login = () => {
    const navigate = useNavigate();

    return(
      <div className="login-background">
        <div className="header-login">
                <img className="ahold-logo-login" src={logo}/>
            </div>
        <ThemeProvider theme={JoshTheme}>
            <div className="login-content">
                <h3 className="login-title">Login</h3>
                <CssTextField style={{margin:'7px'}} id="filled-basic" label="username" variant="filled"/>
                <br></br>
                <CssTextField style={{margin:'7px'}} type="password" id="filled-basic" label="password" variant="filled" />
                <br></br>
                <Button onClick={() => navigate("/swap")} style={{margin: 15}} size="large">Submit</Button>
                <br></br>
                <Button onClick={() => navigate("/createAcc")} style={{margin: 15}} size="large">New User?</Button>
            </div>
          </ThemeProvider>
        </div>
    );
}

export default Login;