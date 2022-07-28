import React from "react";
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { TextField } from "@mui/material";
import {Button, ButtonProps} from "@mui/material";
import { purple } from '@mui/material/colors';
import { duration, styled } from '@mui/material/styles';
import '../css files/login.css';

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
          <div className="login-content">
              <h1 className="login-title">Login</h1>
              <CssTextField style={{margin:'7px'}} fullWidth id="filled-basic" label="username" variant="filled"/>
              <br></br>
              <CssTextField style={{margin:'7px'}} fullWidth type="password" id="filled-basic" label="password" variant="filled" />
              <br></br>
              <Button onClick={() => navigate("/swap")} style={{margin: 15}} size="large">Submit</Button>
              <br></br>
              <Button onClick={() => navigate("/createAcc")} style={{margin: 15}} size="large">New User?</Button>
          </div>
        </div>
    );
}

export default Login;