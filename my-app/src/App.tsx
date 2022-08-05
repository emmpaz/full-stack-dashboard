import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, useNavigate, Route, Routes } from 'react-router-dom';

import CreateAccount from './pages/createAcc';
import Login from './pages/login';
import Dashboard from './pages/dashboard';
import CreateCampaign from './pages/createCampaign';
import { Homepage } from './pages/profileSelection';
import DetailView from './pages/detailView';


import axios from 'axios';
import { DashTwo } from './pages/dashboard_2';
import UploadModule from './components/upload_module';
import UpdateCampaign from './pages/updateCampaign';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
            <Routes>

              <Route path="/upload" element = {<UploadModule currentCamp="x" />}/>
              <Route path="/" element = {<Login />}/>
              <Route path="/swap" element = {<Homepage />}/>
            </Routes>
          </Router>
      </header>
    </div>
  );
}

export default App;
