import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, useNavigate, Route, Routes } from 'react-router-dom';

import CreateAccount from './pages/createAcc';
import Login from './pages/login';
import Dashboard from './pages/dashboard';
import { Homepage } from './pages/profileSelection';
import { DashTwo } from './pages/dashboard_2';
import { Typography } from '@mui/material';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Typography>
          
        </Typography>
        <Router>
            <Routes>
              <Route path="/" element = {<DashTwo />}/>
              <Route path="/swap" element = {<Homepage />}/>
              <Route path="/createAcc" element = {<CreateAccount />}/>
              <Route path="/login" element = {<Login />}/>
              <Route path="/dashboard" element = {<Dashboard />}/>
            </Routes>
          </Router>
      </header>
    </div>
  );
}

export default App;
