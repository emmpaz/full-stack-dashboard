import React from "react";
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const CreateAccount = () => {
    const navigate = useNavigate();

    const [formValue, setformValue] = React.useState({
        firstname: '',
        lastname: '',
        username: '',
        password: '',
    });



    const handleSubmit = () => {
        const createAccountData = new FormData();
        createAccountData.append("firstname", formValue.firstname)
        createAccountData.append("lastname", formValue.lastname)
        createAccountData.append("username", formValue.username)
        createAccountData.append("password", formValue.password)
        console.log(createAccountData);

        const axios = require('axios')

        axios.post('https://ps-springboot.azurewebsites.net/user', createAccountData);
        /*          
        try {
            const response = await axios({
                method: "post",
                url: 'https://ps-springboot.azurewebsites.net/user',
                data: createAccountData,
               // headers: { "Content-Type": "multipart/form-data" }
            });
        } catch(error) {
            console.log(error)
        };*/
    }

    const handleChange = (event: { target: { name: any; value: any; }; }) => {
        const { name, value } = event.target;
        setformValue((prevState) => {
            return {
                ...prevState,
                [name]: value,
            };
        });
    };

    return(
        <div>
            <form method="HTTP_METHOD" onSubmit={handleSubmit}>
                <p>Login Form</p>
                <input
                    type="text"
                    name="firstname"
                    placeholder="What is your first name?"
                    value={formValue.firstname}
                    onChange={handleChange}
                />
                <br></br>
                <input
                    type="text"
                    name="lastname"
                    placeholder="What is your last name?"
                    value={formValue.lastname}
                    onChange={handleChange}
                />
                <br></br>
                <input
                    type="username"
                    name="username"
                    placeholder="Input username"
                    value={formValue.username}
                    onChange={handleChange}
                />
                <br></br>
                <input
                    type="password"
                    name="password"
                    placeholder="Input password"
                    value={formValue.password}
                    onChange={handleChange}
                />
                <br></br>
                <button type="submit">Create Account</button>
                <button onClick={() => navigate("/login")}>Go to Login Page</button>
            </form>
        </div>
    );
};


export default CreateAccount;