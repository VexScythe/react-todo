import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/App.jsx';
import logo from './assets/logo.svg';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="flex m-6 gap-4">
      <img src={logo} alt="website logo" className="w-8"></img>
      <h1 className="text-emerald-400 text-3xl">To Do</h1>
    </div>
    <App />
  </React.StrictMode>,
);
