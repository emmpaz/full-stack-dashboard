import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from 'axios';
import { groupCollapsed } from 'console';

type CreateUserResponse = {
  firstname: string;
  lastname: string;
  username: string;
  password: string;
};

async function createUser() {
  try {
    const { data } = await axios.post<CreateUserResponse>(
      'https://backend-3223232.azurewebsites.net/user',
      { firstname: 'Grace', lastname: 'Smith', username: 'gs123', password: 'password'},
    );
  
    console.log(JSON.stringify(data,null));
    return data;
  
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log('error message: ', error.message);
        return error.message; 
    } else {
      console.log('unexpected error: ', error);
      return 'An unexpected error occurred';
    }
  }
}

createUser();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
