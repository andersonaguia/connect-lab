import axios from "axios"

const URL = `https://connectlab.onrender.com/locals`

export const findLocals = (token) => {    
    const headerConfig = {
        headers:{
            'Authorization': `Bearer ${token}`
        }        
    }
    return axios.get(URL, headerConfig)
}