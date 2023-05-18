import React from 'react';
import Navbar from './components/static/navbar/Navbar';
import Home from './paginas/home/Home';
import Footer from './components/static/footer/Footer';
import Login from './paginas/login/Login';
import Posts from './paginas/postagens/Posts'
import Temas from './paginas/temas/Temas'
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
            <Route path="/posts" element={<Posts />}/>
            <Route path="/temas" element={<Temas />}/>
            <Route path="/login" element={<Login />}/>
        </ Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App
