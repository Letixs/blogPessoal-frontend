import React from 'react';
import Navbar from './components/static/navbar/Navbar';
import Home from './paginas/home/Home';
import Footer from './components/static/footer/Footer';
import Login from './paginas/login/Login';
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
        <Route path="/" element={<Home />}/>
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />}/>
        </ Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App
