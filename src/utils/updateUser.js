import axios from "axios"

export const updateUser = (token, id, body) => {  
    const URL = `https://connectlab.onrender.com/users/${id}` 
    const headerConfig = {
        headers:{
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }        
    }
    return axios.put(URL, body, headerConfig)
}