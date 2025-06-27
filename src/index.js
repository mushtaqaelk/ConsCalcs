import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// This is the standard entry point for a React application.
// It finds the 'root' div in your public/index.html file and
// renders the main App component into it.

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
