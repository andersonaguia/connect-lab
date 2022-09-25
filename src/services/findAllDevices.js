import axios from "axios"

const URL = `https://connectlab.onrender.com/devices`

export const findAllDevices = (token) => {    
    const headerConfig = {
        headers:{
            'Authorization': `Bearer ${token}`
        }        
    }
    return axios.get(URL, headerConfig)
}