import React from 'react';
import { Typography, Grid, Button, Paper } from '@material-ui/core';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';

function Temas() {
  return (
    <>
      <Link to="/temas" className='link'>
        <h1>Temas</h1>
      </Link>
    </>
  );
}

export default Temas;