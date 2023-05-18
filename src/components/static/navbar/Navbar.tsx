import React from 'react';
import './Navbar.css'
import { Container } from '@material-ui/core';
import { Link } from 'react-router-dom';

export default function Navbar() {

    return (
        <nav className='navbar'>
            <img className='logo' src="src\assets\images\logo.png" alt="" />
            <ul className='barra'>
                <li className='listaNav'>
                    <Link to="/">Home</Link>
                </li>
                <li className='listaNav'>
                    <Link to="/posts">Posts</Link>
                </li>
                <li className='listaNav'>
                    <Link to="/contato">Contato</Link>
                </li>
                <div className='buttonContainer'>
                    <Link to='/Login'>
                        <button className="login"><span>Login</span></button>
                    </Link>
                </div>
            </ul>
        </nav>
    );
}
