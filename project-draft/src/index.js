import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import './style.css'
import blogData from './data/blog.json'
import shoeinfo from './data/shoes.json'




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
