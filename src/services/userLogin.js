import axios from "axios"

const URL = 'https://connectlab.onrender.com/auth/login'

const headers = {
 	"Content-Type": "application/json"
}

export const userLogin = (body) => {
    return axios.post(URL, body, headers)
}