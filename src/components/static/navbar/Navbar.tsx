import React from 'react';
import './Navbar.css'
import { Container } from '@material-ui/core';

export default function Navbar() {

    return (
        <nav className='navbar'>
            <img className='logo' src="src\assets\images\logo.png" alt="" />
            <ul>
                <li>
                    <h3>Home</h3>
                </li>
                <li>
                    <h3>Posts</h3>
                </li>  
                <li>
                    <h3>Contato</h3>
                </li>
                <button className="login"><span>Login</span></button>
            </ul>
        </nav>
    );
}
