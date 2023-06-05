import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import User from '../../models/User';
import { buscaId } from '../../services/Service';
import './Perfil.css';
import { TokenState } from '../../store/tokens/Reducer';
import { addToken } from '../../store/tokens/Actions';

function Perfil() {

    let navigate = useNavigate()

    const dispatch = useDispatch()

    const id = useSelector<TokenState, TokenState["id"]>(
        (state) => state.id
    );

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    )

    const [user, setUser] = useState<User>({
        id: +id,   
        nome: '',
        usuario: '',
        senha: '',
        foto: ''
    })

    useEffect(() => {
        if (token === "") {
            alert('Usuário não autenticado!')
            navigate("/login")
        }
    }, [token])

    async function findById(id: string) {
        try {
            await buscaId(`/usuarios/${id}`, setUser, {
                headers: {
                    'Authorization': token
                }
            })
        } catch (error: any) {
            if (error.response?.status === 403) {
                dispatch(addToken(''))
            }
        }
    }

    useEffect(() => {
        if (id !== undefined) {
            findById(id)
        }
    }, [id])

    return (
        <Box className='card-principal'>
            <Box className='card-container-imagem'>
                <img className='card-imagem'
                    src={user.foto}
                    alt={user.nome} />
            </Box>

            <Box className='card-container-info'>
                <Box>
                    <h1>{user.nome}</h1>
                    <h3>{user.usuario}</h3>
                    <hr />
                </Box>

                <p className='card-container-texto'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam accusantium totam incidunt architecto maiores, perferendis eius. Tempora ullam magni dolore voluptatibus, quidem sunt tempore distinctio ut aliquam modi aliquid officiis.
                    Assumenda voluptatibus, animi pariatur voluptatum magnam ullam aspernatur optio suscipit incidunt dolor modi quos aperiam. Quam possimus rerum iste nobis quas porro unde sequi, sed nisi labore est voluptas corrupti.
                    Deleniti officiis sint perspiciatis nisi iste, voluptate sunt asperiores dolor sapiente non corporis omnis voluptatem soluta. Nulla odio alias aperiam, magnam eaque assumenda tempora! Inventore odit iure unde placeat iste.
                </p>

                <p className='card-container-texto'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias consectetur tempore enim hic ad, optio ratione repellendus et. Nemo facilis laborum eum facere ipsam ab ad iusto eligendi deleniti qui?
                </p>
            </Box>
        </Box>
    )
}

export default Perfil
