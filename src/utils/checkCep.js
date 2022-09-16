import axios from "axios"

export const checkCep = (cep) => {
    const URL = `https://viacep.com.br/ws/${cep}/json/`
    return axios.get(URL)
}