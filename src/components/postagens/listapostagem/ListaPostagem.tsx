import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import { Box, IconButton } from '@mui/material';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import './ListaPostagem.css';
import Postagem from '../../../models/Postagem';
import { busca } from '../../../services/Service';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/Reducer';

function ListaPostagem() {

    const [posts, setPosts] = useState<Postagem[]>([]);
    let navigate = useNavigate();

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    )

    useEffect(() => {
        if (token == '') {
            alert("Você precisa estar logado")
            navigate("/login")
        }
    }, [token])

    async function getPostagem() {
        await busca("/postagens", setPosts, {
            headers: {
                'Authorization': token
            }
        })
    }

    useEffect(() => {
        getPostagem()
    }, [posts.length])

    return (
        <>
            <div className='container-posts'>
                {
                    posts.map(post => (
                        <Box m={2} >
                            <Card className='card-posts'>
                                <CardContent>
                                    <div className='edition'>
                                        <h3>{post.tema?.tema}</h3>
                                        <div>
                                            <button>
                                                <Link to={`/formularioPost/${post.id}`}>
                                                    <EditIcon className='button-edit' />
                                                </Link>
                                            </button>
                                            <button>
                                                <Link to={`/deletarPost/${post.id}`}>
                                                    <DeleteIcon className='button-delete' />
                                                </Link>
                                            </button>
                                        </div>
                                    </div>
                                    <div className='date'>
                                        <CalendarTodayIcon style={{fontSize: "medium"}}/>
                                        <h5>{post.data}</h5>
                                    </div>
                                    <h1>{post.titulo}</h1>
                                    <p>{post.texto}</p>
                                    <div className='post-user'>
                                        <img src={post.usuario?.foto} alt=" "/>
                                        <h4>{post.usuario?.nome}</h4>
                                    </div>
                                </CardContent>
                            </Card>
                        </Box >
                    ))
                }
            </div>
        </>
    );
}

export default ListaPostagem;