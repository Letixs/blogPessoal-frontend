import React from 'react';
import { Typography, Grid, Button, Paper } from '@material-ui/core';
import { Box } from '@mui/material';
import './Home.css';
import Carrossel from '../../components/carrossel/Carrossel';

function Home() {
    return (
        <>
            <Grid className='background' container>
                <Grid className='home' item xs={12} sm={12} container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <Paper style={{ height: "20vw", background: "lightgrey" }} />
                    </Grid>
                    <Grid item xs={12} sm={6} >
                        <Paper style={{ height: "20vw", background: "grey" }} />
                    </Grid>
                </Grid>        
            </Grid>
        </>
    );
}

export default Home;