import axios from "axios"

const URL = 'https://connectlab.onrender.com/auth/register'

const headers = {
 	"Content-Type": "application/json"
}

export const createUser = (body) => {
    return axios.post(URL, body, headers)
}


