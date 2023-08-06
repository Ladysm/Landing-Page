import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
// Import our custom CSS
import './App.css';
import * as bootstrap from 'bootstrap';

// Import all of Bootstrap's JS
// import * as bootstrap from 'bootstrap'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
