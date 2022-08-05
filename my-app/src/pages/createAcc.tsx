import React from "react";
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import CreateAccountComp from "../components/createAccountComp";
import Header from '../components/header';
import { TitleContainer } from '../components/containers';
import '../css files/createAcc.css';
import { ThemeProvider } from "@emotion/react";
import JoshTheme from "../css files/allStyle";
import logo from '../assets/images/ourLogo.png';
const CreateAccount = () => {
    const navigate = useNavigate();
    const formData = {
        firstname: '',
        lastname: '',
        username: '',
        password: '',
    }


    const handleSubmit = () => {
        const axios = require('axios')
        axios.post('https://ps-springboot.azurewebsites.net/user', formData)
    }

    return(
        <div className="login-background">
            <div className="header-login">
                <img className="ahold-logo-login" src={logo}/>
            </div>
                <div>
                    <ThemeProvider theme={JoshTheme}>
                    <h1 style={{fontFamily:'PoppinsLight', color:'black'}}>Create New Account</h1>
                        <CreateAccountComp />
                    </ThemeProvider>
                </div>
        </div>
    );
};


export default CreateAccount;