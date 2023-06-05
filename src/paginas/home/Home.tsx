import React from 'react';
import { Typography, Grid, Button, Paper } from '@material-ui/core';
import { Box, Container } from '@mui/material';
import './Home.css';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <>
            <Grid className='background' container direction='row'>
                <Grid className='home' item xs={12} sm={12} container>
                    <Grid className='welcome' item xs={12} sm={6} >
                        <Box>
                            <div className="hello">
                                <h1>Olá _ </h1>
                                <h1 className='underlineAnimated'>_</h1>
                            </div>                             
                            <h1>meu nome é Letícia</h1>
                            <h3>BEM-VINDO(A) AO MEU BLOG</h3>
                            <p>Este é um lugar onde você pode expressar seus pensamentos e conhecimentos acerca de diversos temas jutamente comigo. Sinta-se a vontade para fazer o seu primerio post. </p>
                        </Box>
                        <Box>
                            <Link to='/cadastro'>
                                <button className="cadastroHome"><span>Cadastre-se</span></button>
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