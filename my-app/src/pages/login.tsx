import React from "react";
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { TextField } from "@mui/material";
import {Button, ButtonProps} from "@mui/material";
import { purple } from '@mui/material/colors';
import { duration, styled } from '@mui/material/styles';

const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    '&:hover': {
      backgroundColor: purple[700],
    },
  }));

  const CssTextField = styled(TextField)({
    '& label':{
        color:'white'
    },
    '& .MuiInput-underline':{
        borderBottomColor:'white'
    },
    '& label.Mui-focused': {
      color: 'white',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'white',
    },
  });
const Login = () => {
    const navigate = useNavigate();

    return(
        <div>
            <h1 className="login">Login</h1>
            <CssTextField id="filled-basic" label="username" variant="standard"/>
            <br></br>
            <CssTextField type="password" id="filled-basic" label="password" variant="standard" />
            <br></br>
            <Button onClick={() => navigate("/swap")} style={{margin: 21}}>Submit</Button>
            <br></br>
            <Button onClick={() => navigate("/createAcc")}>New User?</Button>
        </div>
    );
}

export default Login;