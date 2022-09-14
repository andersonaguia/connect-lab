import axios from "axios"

const apiID = '4695d75fc0a051b916433aed57ae060c'

export const checkWheater = (city, country) => {
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${apiID}`
    return axios.get(URL)
}