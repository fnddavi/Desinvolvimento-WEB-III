import axios from 'axios';

async function obter(cep: string) {
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    const {data} = await axios.get(url);
    return data;
}

export default obter;