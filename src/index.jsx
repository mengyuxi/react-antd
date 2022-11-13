/* import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';


ReactDOM.render(<App type="index" />, document.getElementById('root')); */


import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import { HashRouter, Routes, Route } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);