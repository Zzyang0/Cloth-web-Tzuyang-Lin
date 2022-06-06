import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './style.css'
import 'whatwg-fetch';
import { BrowserRouter } from 'react-router-dom';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDkjBhwBDaA_IVIW4IIqGrvWXtXcZol2aM",
  authDomain: "dvogue-a1779.firebaseapp.com",
  databaseURL: "https://dvogue-a1779-default-rtdb.firebaseio.com",
  projectId: "dvogue-a1779",
  storageBucket: "dvogue-a1779.appspot.com",
  messagingSenderId: "536827287350",
  appId: "1:536827287350:web:6bcbff7571e6b7d0bac597"
};

const app = initializeApp(firebaseConfig);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <BrowserRouter> 
    <App />
    </BrowserRouter>
  </React.StrictMode>
);

