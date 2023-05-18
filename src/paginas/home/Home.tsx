import React from 'react';
import { Typography, Grid, Button, Paper } from '@material-ui/core';
import { Box } from '@mui/material';
import './Home.css';
import Carrossel from '../../components/carrossel/Carrossel';

function Home() {
    return (
        <>
            <Grid item xs={12} className='background'>
                <Grid item xs={12} className='home'>
                    <Box >
                        <h1>aaaaaaaaaa</h1>
                    </Box>
                    <Box>
                        <h2>eeeeeeeeeeeee</h2>
                    </Box>
                </Grid>
            </Grid>
        </>
    );
}

export default Home;