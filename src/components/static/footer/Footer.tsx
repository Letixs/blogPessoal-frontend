import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import {Typography, Grid } from '@material-ui/core';
import {Box} from '@mui/material';
import './Footer.css'
import { GitHub } from '@material-ui/icons';

function Footer() {
    return (
        <>
            <Grid className='footer' container direction="row" justifyContent="center" alignItems="center" style={{position:"fixed", bottom: 0, left: 0, right: 0}}>
                <Grid alignItems="center" item xs={12}>
                    <Box>
                        <Box display="flex" alignItems="center" justifyContent="center">
                            <a href="https://www.linkedin.com/school/generationbrasil/" target="_blank">
                                <LinkedInIcon style={{ fontSize: 60, color: "white" }} />
                            </a>
                            <a href="https://github.com/Letixs" target='blank'>
                            <GitHub style={{ fontSize: 50, color: "white" }} />
                            </a>
                        </Box>
                    </Box>
                    <Box>
                        <Box paddingTop={1}>
                            <Typography variant="subtitle2" align="center" gutterBottom style={{ color: "white" }} >© 2023 Copyright:</Typography>
                        </Box>
                        <Box>
                            <a target="_blank" href="https://brasil.generation.org">
                                <Typography variant="subtitle2" gutterBottom style={{ color: "white" }} align="center">Letícia Queiroga</Typography>
                            </a>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default Footer;