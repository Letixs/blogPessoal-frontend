import React, {ChangeEvent, useState} from 'react';
import { Typography, Grid, Button, Paper, TextField } from '@material-ui/core';
import { Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import UserLogin from '../../models/UserLogin';
import './Login.css'
import useLocalStorage from 'react-use-localstorage';

function Login() {

  let navigate = useNavigate();
  const[token, setToken] = useLocalStorage('token');

  const[userLogin, setUserLogin] = useState<UserLogin>({
    id: 0,
    usuario: '',
    senha: '',
    token: ''
  })

  function updatedModel(e: ChangeEvent<HTMLInputElement>){
    setUserLogin({
      ...userLogin,
      [e.target.name]: e.target.value
    })
  }



  async function onSubmit(e:ChangeEvent<HTMLFormElement>){
    e.preventDefault();

    console.log('userLogin' + userLogin)
  }

  return (
    <>
      <Grid className='backgroundLogin' container direction='row' justifyContent='center' alignItems='center'>
        <Grid xs={6} alignItems='center'>
          <Box paddingX={20}>
            <form onSubmit={onSubmit}>
              <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center'>Entrar</Typography>
              <TextField value={userLogin.usuario} onChange={(e:ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='usuario' label='usuario' variant='outlined' name='usuario' margin='normal' fullWidth />
              <TextField value={userLogin.senha} onChange={(e:ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' label='senha' variant='outlined' name='senha' margin='normal' fullWidth />
              <Box marginTop={2} textAlign='center'>
                <Link to='/home'>
                  <Button>
                    Logar
                  </Button>
                </Link>
              </Box>
            </form>
            <Box display='flex' justifyContent='center' marginTop={2}>
              <Box>
                <h4>Não tem uma conta?</h4>
              </Box>
              <h4>Cadastre-se</h4>
            </Box>
          </Box>
        </Grid>
        <Grid xs={6}>

        </Grid>
      </Grid>
    </>
  );
}

export default Login;