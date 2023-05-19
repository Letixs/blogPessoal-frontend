import React from 'react';
import Navbar from './components/static/navbar/Navbar';
import Home from './paginas/home/Home';
import Footer from './components/static/footer/Footer';
import Login from './paginas/login/Login';
import Posts from './paginas/postagens/Posts'
import Temas from './paginas/temas/Temas'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div style={{ minHeight: '40vw' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/temas" element={<Temas />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cadastro" element={<CadastroUsuario />} />
          </ Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App
