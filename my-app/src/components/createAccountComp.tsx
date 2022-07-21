import React, { useState } from 'react';
import axios from 'axios';
import { Box, Button, Input } from '@mui/material';
import { User } from '../helper files/types';

const defaultUser: User = {
    firstname: '',
    lastname: '',
    username: '',
    password: ''
}

export const CreateAccountComp = () => {
    const [newUser, setNewUser] = useState<User>(defaultUser)

    const handleInputChange = (e: any) => {
        const { name, value } = e.target;
        setNewUser({
            ...newUser,
            [name]: value,
        });
    };

    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        
        axios.post('https://ps-springboot.azurewebsites.net/user', newUser)
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    }

    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off">
            <Input type="text" name="firstname" placeholder="First Name" value={newUser.firstname} onChange={handleInputChange}></Input> <br />
            <Input type="text" name="lastname" placeholder="Last Name" value={newUser.lastname} onChange={handleInputChange}></Input> <br />
            <Input type="username" name="username" placeholder="Username" value={newUser.username} onChange={handleInputChange}></Input> <br />
            <Input type="password" name="password" placeholder="password" value={newUser.password} onChange={handleInputChange}></Input> <br />
            <Button type="submit" onClick={handleSubmit}>Submit</Button>
        </Box>
    )
}

export default CreateAccountComp;