import React from 'react';
import Navbar from './components/static/navbar/Navbar';
import Home from './paginas/home/Home';
import Footer from './components/static/footer/Footer'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
        <Navbar />
        <Home />
        <Footer />
    </>
  );
}

export default App
