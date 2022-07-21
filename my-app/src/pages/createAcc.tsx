import React from "react";
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import CreateAccountComp from "../components/createAccountComp";

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
            <h1>Create New Account</h1>
            <CreateAccountComp />
        </div>
    );
};


export default CreateAccount;