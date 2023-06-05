import React from 'react';
import Navbar from './components/static/navbar/Navbar';
import Home from './paginas/home/Home';
import Footer from './components/static/footer/Footer';
import Login from './paginas/login/Login';
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';
import ListaTema from './components/temas/listatema/ListaTema';
import ListaPostagem from './components/postagens/listapostagem/ListaPostagem';
import CadastroPost from './components/postagens/cadastropostagem/CadastroPost';
import CadastroTema from './components/temas/cadastrotema/CadastroTema';
import DeletarTema from './components/temas/deletartema/DeletarTema';
import DeletarPost from './components/postagens/deletarpostagem/DeletarPost';
import { Provider } from 'react-redux';
import store from './store/Store';
import Perfil from './components/perfil/Perfil';

function App() {
  return (
    <>
      <Provider store={store} >
        <BrowserRouter>
          <Navbar />
          <div style={{ minHeight: '40vw', paddingTop: '60px' }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/posts" element={<ListaPostagem />} />
              <Route path="/temas" element={<ListaTema />} />
              <Route path="/login" element={<Login />} />
              <Route path="/cadastro" element={<CadastroUsuario />} />
              <Route path="/formularioPost" element={<CadastroPost />} />
              <Route path="/formularioPost/:id" element={<CadastroPost />} />
              <Route path="/formularioTema" element={<CadastroTema />} />
              <Route path="/formularioTema/:id" element={<CadastroTema />} />
              <Route path="/deletarTema/:id" element={<DeletarTema />} />
              <Route path="/deletarPost/:id" element={<DeletarPost />} />
              <Route path="/perfil" element={<Perfil />} />
            </ Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App
