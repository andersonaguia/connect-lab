import axios from "axios"

export const deleteDevice = (token, id) => {  
    const URL = `https://connectlab.onrender.com/userDevices/${id}` 
    const headerConfig = {
        headers:{
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }        
    }
    return axios.delete(URL, headerConfig)
}