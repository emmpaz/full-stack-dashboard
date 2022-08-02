import React from "react";
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import CreateAccountComp from "../components/createAccountComp";
import Header from '../components/header';
import { TitleContainer } from '../components/containers';
import '../css files/createAcc.css';

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
        <div>
             <Header></Header>
            <div>
                <div>
                    <h1>Create New Account</h1>
                        <CreateAccountComp />
                </div>
            </div>
        </div>
    );
};


export default CreateAccount;