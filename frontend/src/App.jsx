import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage  from './pages/Home';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    // 3. Wrap everything in <BrowserRouter>
    <BrowserRouter>
      {/* 4. Define your pages using <Routes> */}
      <Routes>
        {/* When the URL is "/", show the HomePage */}
        <Route path="/" element={<HomePage />} />
        
        {/* When the URL is "/dashboard", show the Dashboard */}
        <Route path="/Dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
