import axios from "axios"

const URL = `https://connectlab.onrender.com/userDevices`

export const addDevice = (token, data) => {   
    console.log("TOKEN: ", token)
    console.log("Data: ", data) 
    const headerConfig = {
        headers:{
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }        
    }
    return axios.put(URL, data, headerConfig)
}