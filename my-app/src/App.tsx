import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, useNavigate, Route, Routes } from 'react-router-dom';

import CreateAccount from './pages/createAcc';
import Login from './pages/login';
import Dashboard from './pages/dashboard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
            <Routes>
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
