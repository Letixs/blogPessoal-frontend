import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Card, CardContent } from '@material-ui/core';
import { Box } from '@mui/material';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';
import './ListaTema.css';
import '../../postagens/listapostagem/ListaPostagem.css'
import Tema from '../../../models/Tema';
import { busca } from '../../../services/Service';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/Reducer';

function ListaTema() {

  const [temas, setTemas] = useState<Tema[]>([]);

  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  )

  let navigate = useNavigate();

  useEffect(() => {
    if (token == '') {
      alert("Você precisa estar logado")
      navigate("/login")
    }
  }, [token])

  async function getTema() {
    await busca("/temas", setTemas, {
      headers: {
        'Authorization': token
      }
    })
  }

  useEffect(() => {
    getTema()
  }, [temas.length])

  return (
    <>
      <div className='container-temas'>
        <Box m={2} >
          <Card className='card-temas'>
          <PerfectScrollbar>
            <h3 className='titulo-temas'>Temas</h3>
            {temas.map(tema => (
              <CardContent>      
                  <div className='edition'>
                    <h3 className='temas'>{tema.tema}</h3>
                    <div className='tema-edition'>
                      <button>
                        <Link to={`/formularioTema/${tema.id}`}>
                          <EditIcon className='button-edit' />
                        </Link>
                      </button>
                      <button>
                        <Link to={`/deletarTema/${tema.id}`}>
                          <DeleteIcon className='button-delete' />
                        </Link>
                      </button>
                    </div>
                  </div>   
              </CardContent>
            ))
            }
            </PerfectScrollbar>
          </Card>
        </Box>
      </div>
    </>
  );
}



export default ListaTema;