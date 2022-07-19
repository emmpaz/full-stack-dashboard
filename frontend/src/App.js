import logo from './logo.svg';
import { Component, Link } from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, useNavigate, Route, Routes } from 'react-router-dom';
import PopUp from "./pages/components/popup.js";
import Dashboard from './pages/dashboard.js';
import Create from './pages/create.js';
import View from './pages/view.js';
import Login from './pages/login.js';
import axios from 'axios';

class App extends Component{

  constructor(props){
    super(props)
    this.state={
      username:"",
      name:""
    }
  }

  componentDidMount(){
    this.getAPI()
  }

  getAPI(){
    axios.get("http://localhost:8080/user/211").then((response) => {
      //const{id, firstname,lastname,username, password } = response
      this.setState({
        username: response.data.username,
        name: response.data.firstname + " " + response.data.lastname
      })
    })
  }

  render(){
    return (
        <div className="App">
          <header className="App-header">
          <p>{this.state.username}</p>
          <p>
            {this.state.name}
          </p>
          <Router>
            <Routes>
              <Route path="/" element = {<Dashboard />}/>
              <Route path="/create" element = {<Create />} />
              <Route path="/view" element = {<View />} />
              <Route path="/login" element = {<Login />} />
            </Routes>
          </Router>
          </header>
        </div>
    /*  <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>{this.state.username}</p>
          <p>
            {this.state.name}
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>*/
    );
  }
}

export default App;
