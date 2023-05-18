import React from 'react';
import { Typography, Grid, Button, Paper } from '@material-ui/core';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <Link to="/home" className='link'>
        <h1>Home</h1>
      </Link>
      <h1>Login</h1>
    </>
  );
}

export default Home;