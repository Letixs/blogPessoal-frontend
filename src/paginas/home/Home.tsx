import React from 'react';
import {Typography, Grid, Button, Paper} from '@material-ui/core';
import {Box} from '@mui/material';
import './Home.css';

function Home() {
    return (
        <>
            <Grid className='home' container direction="row" justifyContent="center" alignItems="center">
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                       <Paper style={{backgroundColor:"#0d5997"}}>

                       </Paper>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                        </Box>
                        <Button variant="outlined" style={{ borderColor: "white", backgroundColor: "#3F51B5", color: "white" }}>Ver Postagens</Button>
                    </Box>
                </Grid>
                <Grid item xs={6} >
                    <img src="" alt="" width="500px" height="500px" />
                </Grid>
                <Grid xs={12} style={{ backgroundColor: "white" }}>
                </Grid>
            </Grid>
        </>
    );
}

export default Home;