import axios from 'axios';

export const api = axios.create({
    baseURL:'https://blogpessoal-8swj.onrender.com'
})

export const cadastro = async(url:any,dados:any,setDado:any) =>{
    const resposta = await api.post(url,dados)
    setDado(resposta.data)
}

export const login = async(url:any,dados:any,setDado:any) =>{
    const resposta = await api.post(url,dados)
    setDado(resposta.data.token)
}

