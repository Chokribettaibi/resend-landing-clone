// This file boots the React app and loads the global Tailwind styling.
// It is the entry point for the landing page and can be customized by editing the theme and import order here.
// To update the page colors or typography, adjust the CSS variables in `src/styles/globals.css`.
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/globals.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
