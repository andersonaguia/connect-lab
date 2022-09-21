import axios from "axios"

export const findUserDevices = (token, id) => {   
    const URL = `https://connectlab.onrender.com/userDevices/user/${id}` 
    console.log(id)
    const headerConfig = {
        headers:{
            'Authorization': `Bearer ${token}`
        }        
    }
    return axios.get(URL, headerConfig)
}