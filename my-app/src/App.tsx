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
              <Route path="/createAcc" element = {<CreateAccount />}/>
<<<<<<< HEAD
              <Route path="/login" element = {<Login />}/>
              <Route path="/dashboard" element = {<Dashboard />}/>
              <Route path="/createCampaign" element = {<CreateCampaign />}/>
              <Route path="/detailView" element = {<DetailView />}/>
=======
              <Route path="/dashboard" element = {<Dashboard />}/>
              <Route path="/createCampaign" element = {<CreateCampaign />}/>
              <Route path="/detailView" element = {<DetailView />}/>
              <Route path="/dashboard_2" element= {<DashTwo/>}/>
>>>>>>> 308b88fde482e86f0d602d55ca0933e5e4bceb6c
              <Route path="/updateCampaign" element = {<UpdateCampaign />}/>
            </Routes>
          </Router>
      </header>
    </div>
  );
}

export default App;
