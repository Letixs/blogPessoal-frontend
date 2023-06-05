import React, { useEffect, useState } from 'react';
import './Navbar.css'
import { Link, useNavigate } from 'react-router-dom';
import { Container } from '@mui/material';
import useLocalStorage from 'react-use-localstorage';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/Reducer';
import { Action, addToken } from '../../../store/tokens/Actions';

export default function Navbar() {

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    )

    const dispatch = useDispatch()

    let navigate = useNavigate();

    function goLogout() {
        dispatch(addToken(''))
        toast.info('Usuário Desconectado!', {
            position: 'top-right',
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: 'colored',
            progress: undefined,
        });
        navigate('/login')
    }

    return (
        <nav className={`navbar ${scrolled ? "scrolled" : ''}`} >
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
                <li className='listaNav'>
                    <Link to="/temas">Temas</Link>
                </li>
                <li className='listaNav'>
                    <Link to="/formularioTema">Criar Tema</Link>
                </li>
                <li className='listaNav'>
                    <Link to="/formularioPost">Criar Postagem</Link>
                </li>
                <li className='listaNav'>
                    <Link to="/perfil">Perfil</Link>
                </li>
                <li onClick={goLogout} className='listaNav'>
                    Logout
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

function dispatch(arg0: Action) {
    throw new Error('Function not implemented.');
}

