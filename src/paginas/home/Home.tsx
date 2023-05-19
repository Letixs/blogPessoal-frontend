import React from 'react';
import { Typography, Grid, Button, Paper } from '@material-ui/core';
import { Box } from '@mui/material';
import './Home.css';
import Carrossel from '../../components/carrossel/Carrossel';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <>
            <Grid className='background' container direction='row'>
                <Grid className='home' item xs={12} sm={12} container>
                    <Grid className='welcome' item xs={12} sm={6} >
                        <Box className='welcomeTexto'>
                            <h1>Seja bem-vindo(a)</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque incidunt magni, esse saepe repudiandae quos velit quaerat minus ex, placeat facilis eligendi accusamus officiis. Sed nisi veritatis cupiditate cum nulla?</p>
                        </Box>
                        <Box>
                            <Link to='/cadastro'>
                                <button className="cadastro"><span>Cadastre-se</span></button>
                            </Link>
                        </Box>
                    </Grid>
                    <Grid className='homeImg' item xs={12} sm={6} >
                        <img src="src\assets\images\pcpc.png" alt="" />
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
}

export default Home;