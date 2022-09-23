import axios from "axios"

export const updateDeviceStatus = (token, id, status) => {  
    const URL = `https://connectlab.onrender.com/userDevices/${id}` 
    const headerConfig = {
        headers:{
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }        
    }
    const body = {
        "is_on": status
    }

    return axios.put(URL, body, headerConfig)
}