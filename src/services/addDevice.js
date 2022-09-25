import axios from "axios"

const URL = `https://connectlab.onrender.com/userDevices`

export const addDevice = (token, data) => {   
    const headerConfig = {
        headers:{
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }        
    }
    return axios.post(URL, JSON.stringify(data), headerConfig)
}