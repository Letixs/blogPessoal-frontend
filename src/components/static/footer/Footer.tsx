import react from 'react';
import { Button, Grid, Paper, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';

import './Footer.css';
import { GitHub } from '@mui/icons-material';

function Footer() {

    return (

        <>
 <Grid className='footer' style={{ backgroundColor: "#ffffff", width: "100%", margin: 0 }} spacing={3} container direction="row" justifyContent="center">

{/* Sobre o projeto */}
<Grid item xs={5}>
    <Box>
        <h4 className='titulos'>SOBRE O PROJETO</h4>
        <p className="texto">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas voluptatibus doloremque dolorem ratione itaque impedit ipsam qui veniam consequuntur. Laboriosam dignissimos totam provident dolorum suscipit quasi aspernatur voluptatem tempora ex. </p>
    </Box>
</Grid>

{/* lista de tecnologias */}
<Grid item xs={3}>
    <Box>
        <h4 className='titulos'>TECNOLOGIAS UTILIZADAS</h4>
        <p className="texto">
            Java
        </p>
        <p className="texto">
            Java
        </p>
        <p className="texto">
            Java
        </p>
        <p className="texto">
            Java
        </p>
        <p className="texto">
            Java
        </p>
    </Box>
</Grid>

{/* redes */}
<Grid item xs={3} >
    <Box style={{ marginRight: "0px" }}>
        <h4 className='titulos'>REDES</h4>
        <Box className='redes' style={{ display: "flex" }}>
            <p className='texto1'>Siga-nos</p>
            <Box className='redesIcon'>
                <a href="https://www.linkedin.com/school/generationbrasil/" target="_blank">
                    <LinkedInIcon style={{ fontSize: 49, color: "537a56" }} />
                </a>
                <a className='iconGit' href="https://www.linkedin.com/school/generationbrasil/" target="_blank">
                    <GitHubIcon style={{ fontSize: 45, color: "537a56" }} />
                </a>
            </Box>
        </Box>
    </Box>
</Grid>

{/* copyright */}
<Grid item xs={11} style={{ marginBottom: "-7px" }}>
    <hr></hr>
    <Box style={{ marginLeft: "60rem", paddingTop: "4px" }}>
        <Typography variant="subtitle2" align="center" style={{ color: "black" }}>© 2023 Copyright: SaúdeCheckup</Typography>
    </Box>
</Grid>
</Grid>
           

        </>
        )
}

export default Footer;