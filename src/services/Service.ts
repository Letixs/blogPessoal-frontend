import axios from 'axios';

export const api = axios.create({
    baseURL:'https://blogpessoal-8swj.onrender.com'
})

export const cadastro = async(url: any, dados: any, setDado: any) =>{
    try {
        const resposta = await api.post(url,dados)
        if(resposta.status == 201) {
            setDado(resposta.data);
            alert('Usuario cadastrado')
        } else {
            alert('Erro ao cadastrar usuário');
        }   
    } catch (error) {
        console.error('Erro na requisição:', error);
        alert('Erro ao cadastrar usuário.');
    }
}

export const login = async(url: any, dados: any, setDado: any) =>{
    const resposta = await api.post(url,dados)
    setDado(resposta.data.token)
}

export const busca = async(url: any, setDado: any, header: any) =>{
    const resposta = await api.get(url,header)
    setDado(resposta.data)
}
